# TedXBitsHyderabad

## Configuration: Using `config.ts`

This project currently uses a centralized configuration file located at `data/config.ts` for storing most of the app's data and settings. This includes:

- Event information (date, time, location, tagline)
- Team members and About Us content
- Sponsor and partner logos
- Navigation links and UI strings
- Footer content
- Theme colors and animation settings

### How to Use
- To update any static content or configuration, edit the relevant section in `data/config.ts`.
- All major UI components import their data from this file, so changes will be reflected throughout the app.

### Future Improvements
- **Dynamic Content:** For scalability and easier content management, consider moving dynamic or frequently updated data (e.g., team members, event info, testimonials) to a CMS or database.
- **Environment Variables:** Store secrets and environment-specific settings in `.env` files, not in `config.ts`.
- **Modular Config:** As the project grows, split configuration into multiple files by domain (e.g., `eventConfig.ts`, `footerConfig.ts`).
- **Localization:** Use i18n frameworks for multi-language support if needed.

> **Note:** `config.ts` is a temporary solution for rapid development and prototyping. Refactoring to a more dynamic and secure configuration approach is recommended for production.

---

For more details, see the comments in `data/config.ts` or reach out to the project maintainers. 