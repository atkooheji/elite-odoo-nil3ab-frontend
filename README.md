# Nil3ab Global Frontend - Neo-Brutalist React Engine

## Overview

Ultimate Interactive Neo-Brutalist Frontend Platform integration for Odoo. Provides Global React components available to drag-and-drop across all websites via Odoo building snippets.

This repository contains the standalone Odoo addon `nil3ab_frontend` extracted from the Elite Sport Odoo project. It is intended to be versioned, reviewed, and reused independently from the full Odoo deployment repository.

## Project Details

- **Technical module name:** `nil3ab_frontend`
- **GitHub repository:** `https://github.com/atkooheji/elite-odoo-nil3ab-frontend`
- **Odoo version target:** Odoo 19
- **Module version:** `2.0.0`
- **Author:** Antigravity
- **License:** `LGPL-3`
- **Installable:** `True`
- **Application module:** `False`

## What This Module Does

Universal React, Canvas, & Motion Engine powering ALL websites in this Odoo instance.

Use this addon as part of the Elite Sport custom Odoo stack. It may depend on other ATK/Elite modules, so install dependencies first when deploying it outside the original monorepo.

## Dependencies

- `website`

## Included Data and Views

- `views/snippets.xml`

## Demo Data

- None declared

## Repository Structure

- `__manifest__.py` - Odoo module manifest
- `__init__.py` - module initialization
- `views/` - 1 file(s)
- `static/` - 3 file(s)

## Installation

1. Copy this addon folder into an Odoo addons path, for example `/mnt/extra-addons/nil3ab_frontend`.
2. Make sure all dependencies listed above are installed or available in the same Odoo database.
3. Restart the Odoo service so the addon path is rescanned.
4. Activate developer mode in Odoo.
5. Go to **Apps**, update the apps list, search for `nil3ab_frontend`, and install it.

## Upgrade

After pulling changes into an existing Odoo environment, upgrade the module with:

```bash
odoo-bin -d <database_name> -u nil3ab_frontend --stop-after-init
```

For Odoo.sh, push the branch and upgrade the module from the Odoo Apps interface or through the deployment upgrade flow.

## Development Workflow

1. Create a feature branch from `main`.
2. Make changes inside this addon only.
3. Test installation and upgrade on a local/staging database.
4. Check server logs for registry, XML, access-rights, and dependency errors.
5. Commit with a clear message and open a pull request before production use.

## Testing Checklist

- Module installs without registry errors.
- Module upgrades cleanly from the previous version.
- Menus, views, security groups, and access rights load correctly.
- Any scheduled actions, controllers, or integrations run as expected.
- No secrets, database dumps, or environment files are committed.

## Security Notes

This is a public repository. Do not commit `.env` files, credentials, customer data, database backups, private tokens, or production logs. Keep deployment-specific configuration outside the addon source.

## Source Context

Extracted from the Elite Sport Odoo project under:

```text
D:\001-AntiGravity\003-Odoo\elite_sport_project-main\elite_sport_project-main\addons\nil3ab_frontend
```
