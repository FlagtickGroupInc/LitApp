import { LitElement, html, css } from 'lit';

class SidebarEditor extends LitElement {
    static properties = {
        page: { type: String },
        content: { type: String },
        components: { type: Object },
        searchQuery: { type: String },
    };

    static styles = css`
        :host {
            display: flex;
            height: 100vh;
        }
        .sidebar {
            width: 260px;
            background-color: #222e3c;
            color: white;
            overflow-y: auto;
            padding: 15px;
        }
        .sidebar input {
            width: 100%;
            padding: 8px;
            border-radius: 5px;
            border: 1px solid #ccc;
            margin-bottom: 15px;
            font-size: 14px;
        }
        .sidebar ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .sidebar li {
            padding: 8px 10px;
            cursor: pointer;
            border-bottom: 1px solid #ccc;
        }
        .sidebar li:hover {
            background-color: #2b3a4d;
        }
        .editor {
            flex-grow: 1;
            padding: 20px;
            background-color: #f5f5f5;
        }
        textarea {
            width: 100%;
            height: calc(100vh - 100px);
            font-family: monospace;
            font-size: 16px;
            padding: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .actions {
            margin-top: 10px;
            text-align: right;
        }
        button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    `;

    constructor() {
        super();
        this.page = '';
        this.content = '';
        this.components = {};
        this.searchQuery = '';
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchComponents();
    }

    fetchComponents() {
        fetch('/api/components')
            .then((response) => response.json())
            .then((data) => {
                this.components = data;
            })
            .catch((error) => {
                console.error('Error fetching components:', error);
            });
    }

    saveChanges() {
        const updatedContent = this.shadowRoot.querySelector('textarea').value;

        fetch(`/api/save-page`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            },
            body: JSON.stringify({
                page: this.page,
                content: updatedContent,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message || 'Changes saved successfully!');
            })
            .catch((error) => {
                console.error('Error saving changes:', error);
            });
    }

    filterComponents(query) {
        this.searchQuery = query.toLowerCase();
    }

    renderComponentsList() {
        const filtered = {};
        for (const category in this.components) {
            filtered[category] = this.components[category].filter((name) =>
                name.toLowerCase().includes(this.searchQuery)
            );
        }
        return filtered;
    }

    render() {
        const filteredComponents = this.renderComponentsList();
        return html`
            <div class="sidebar">
                <input
                    type="text"
                    placeholder="Search Components..."
                    @input="${(e) => this.filterComponents(e.target.value)}"
                />
                ${Object.keys(filteredComponents).map(
                    (category) => html`
                        <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                        <ul>
                            ${filteredComponents[category].map(
                                (component) => html`
                                    <li @click="${() => this.loadComponent(component, category)}">
                                        ${component}
                                    </li>
                                `
                            )}
                        </ul>`
                    )}
            </div>
            <div class="editor">
                <h1>Editing: ${this.page}.blade.php</h1>
                <textarea>${this.content}</textarea>
                <div class="actions">
                    <button @click="${this.saveChanges}">Save Changes</button>
                </div>
            </div>
        `;
    }

    loadComponent(component, category) {
        alert(`Loading ${component} from ${category}`);
    }
}

customElements.define('sidebar-editor', SidebarEditor);
