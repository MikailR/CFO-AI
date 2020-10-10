const MenuItems = [
    {
        title: 'Home',
        path: '/',
        cName: 'navbar-link navbar-menu-item home-link',
        isDropdown: false,
    },
    {
        title: 'Features',
        path: '#',
        cName: 'navbar-link navbar-menu-item features-link',
        isDropdown: true,
        subItems: [
            {
                title: 'CFO AI',
                path: '/cfo-ai',
                cName: 'feature-link feature-menu-item drop-down-menu-item'
            },
            {
                title: 'Bankruptcy Protection',
                path: '/bankruptcy-protection',
                cName: 'feature-link feature-menu-item drop-down-menu-item'
            },
            {
                title: 'Waste Management',
                path: 'waste-management',
                cName: 'feature-link feature-menu-item drop-down-menu-item'
            },
            {
                title: 'Staff ',
                path: '',
                cName: 'feature-link feature-menu-item drop-down-menu-item'
            },
        ]
    },
    {
        title: 'Contact Us',
        path: '/contact',
        cName: 'navbar-link navbar-menu-item contact-link',
        isDropdown: false,
    },
]

export default MenuItems;