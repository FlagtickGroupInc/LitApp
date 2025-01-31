import { LitElement, html, css } from 'lit';
import { unsafeCSS } from 'lit';
import sidebar from './../../scss/components/sidebar.scss';

class SidebarEditor extends LitElement {
    static properties = {
        page: { type: String },
        content: { type: String },
        components: { type: Object },
        searchQuery: { type: String },
    };

    static styles = css`
        ${unsafeCSS(sidebar)}
    `;

    constructor() {
        super();
        this.page = '';
        this.content = '';
        this.components = {};
        this.searchQuery = '';
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="sidebar">
                <div class="sidebar-wrapper" style="margin: 0;">
                    <div class="sidebar-mask">
                        <div class="sidebar-offset" style="right: 0; bottom: 0;">
                            <div class="sidebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content"
                                 style="height: 100%; overflow: hidden scroll;">
                                <div class="sidebar-content" style="padding: 0;">
                                    <a class="sidebar-brand" href="javascript:void(0);">
                                        <span class="text-middle">Flagtick Group</span>
                                        <img src="/logo/logo-short.png" alt="logo-short" />
                                    </a>

                                    <ul class="sidebar-nav">
                                        <li class="sidebar-header">
                                            Pages
                                        </li>

                                        <li class="sidebar-item active">
                                            <a class="sidebar-link" href="index.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-sliders text-middle">
                                                    <line x1="4" y1="21" x2="4" y2="14"></line>
                                                    <line x1="4" y1="10" x2="4" y2="3"></line>
                                                    <line x1="12" y1="21" x2="12" y2="12"></line>
                                                    <line x1="12" y1="8" x2="12" y2="3"></line>
                                                    <line x1="20" y1="21" x2="20" y2="16"></line>
                                                    <line x1="20" y1="12" x2="20" y2="3"></line>
                                                    <line x1="1" y1="14" x2="7" y2="14"></line>
                                                    <line x1="9" y1="8" x2="15" y2="8"></line>
                                                    <line x1="17" y1="16" x2="23" y2="16"></line>
                                                </svg>
                                                <span class="text-middle">Dashboard</span>
                                            </a>
                                        </li>

                                        <li class="sidebar-item">
                                            <a class="sidebar-link" href="pages-profile.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-user text-middle">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                                <span class="text-middle">Profile</span>
                                            </a>
                                        </li>

                                        <li class="sidebar-item">
                                            <a class="sidebar-link" href="pages-sign-in.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-log-in text-middle">
                                                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                                    <polyline points="10 17 15 12 10 7"></polyline>
                                                    <line x1="15" y1="12" x2="3" y2="12"></line>
                                                </svg>
                                                <span class="text-middle">Sign In</span>
                                            </a>
                                        </li>

                                        <li class="sidebar-item">
                                            <a class="sidebar-link" href="pages-sign-up.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-user-plus text-middle">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                                <span class="text-middle">Sign Up</span>
                                            </a>
                                        </li>

                                        <li class="sidebar-item">
                                            <a class="sidebar-link" href="pages-blank.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-book text-middle">
                                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                                </svg>
                                                <span class="text-middle">Blank</span>
                                            </a>
                                        </li>

                                        <li class="sidebar-header">
                                            Tools &amp; Components
                                        </li>

                                        <li class="sidebar-item">
                                            <a class="sidebar-link" href="ui-buttons.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-square text-middle">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                </svg>
                                                <span class="text-middle">Buttons</span>
                                            </a>
                                        </li>

                                        <li class="sidebar-item">
                                            <a class="sidebar-link" href="ui-forms.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-check-square text-middle">
                                                    <polyline points="9 11 12 14 22 4"></polyline>
                                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                                </svg>
                                                <span class="text-middle">Forms</span>
                                            </a>
                                        </li>

                                        <li class="sidebar-item">
                                            <a class="sidebar-link" href="ui-cards.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                     stroke-linejoin="round" class="icon icon-grid text-middle">
                                                    <rect x="3" y="3" width="7" height="7"></rect>
                                                    <rect x="14" y="3" width="7" height="7"></rect>
                                                    <rect x="14" y="14" width="7" height="7"></rect>
                                                    <rect x="3" y="14" width="7" height="7"></rect>
                                                </svg>
                                                <span class="text-middle">Cards</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('flagtickgroup-core-admin-sidebar', SidebarEditor);

