import Gio from "gi://Gio";
import Adw from "gi://Adw";

import { ExtensionPreferences, gettext as _ } from "resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js";

export default class ExamplePreferences extends ExtensionPreferences {
  fillPreferencesWindow(window) {
    // Create a preferences page, with a single group
    const page = new Adw.PreferencesPage({
      title: _("General"),
      icon_name: "dialog-information-symbolic",
    });
    window.add(page);

    const group = new Adw.PreferencesGroup({
      title: _("Three Finger Drag"),
      description: _("Configure the Three Finger Drag settings"),
    });
    page.add(group);

    // Create a new preferences row
    const commandLineRow = new Adw.EntryRow({
      title: _("Three Finger Drag Command"),
    });
    group.add(commandLineRow);
    const row = new Adw.SwitchRow({
      title: _("Three Finger Drag"),
      subtitle: _("Whether to enable three finger drag"),
    });
    group.add(row);

    // Create a settings object and bind the row to the `three-finger-drag` key
    window._settings = this.getSettings();
    window._settings.bind("three-finger-drag", row, "active", Gio.SettingsBindFlags.DEFAULT);
    window._settings.bind("three-finger-drag-command", commandLineRow, "text", Gio.SettingsBindFlags.DEFAULT);
  }
}
