function mergeSettings(savedSettingsJSON, defaultSettings) {

    let savedSettings = JSON.parse(savedSettingsJSON);

    let merged = {};

    for (let key in defaultSettings) {
        merged[key] = defaultSettings[key];
    }

    for (let key in savedSettings) {
        merged[key] = savedSettings[key];
    }

    return {
        mergedObject: merged,
        mergedJSON: JSON.stringify(merged)
    };
}