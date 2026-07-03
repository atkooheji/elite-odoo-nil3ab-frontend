{
    'name': 'Nil3ab Global Frontend - Neo-Brutalist React Engine',
    'version': '2.0.0',
    'category': 'Website',
    'summary': 'Universal React, Canvas, & Motion Engine powering ALL websites in this Odoo instance.',
    'description': """
Ultimate Interactive Neo-Brutalist Frontend Platform integration for Odoo.
Provides Global React components available to drag-and-drop across all websites via Odoo building snippets.
    """,
    'author': 'Antigravity',
    'depends': ['website'],
    'data': [
        'views/snippets.xml',
    ],
    'assets': {
        # CRITICAL: THIS ENABLES SITE-WIDE USAGE ACROSS ALL ODOO WEBSITES
        'web.assets_frontend': [
            'nil3ab_frontend/static/src/css/nil3ab-react.css',
            'nil3ab_frontend/static/src/js/nil3ab-react.js',
            'nil3ab_frontend/static/src/js/odoo_glue.js',
        ],
    },
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
}
