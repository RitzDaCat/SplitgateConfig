function createSettingElement(setting) {
    const div = document.createElement('div');
    div.className = 'setting';

    const label = document.createElement('label');
    label.htmlFor = setting.name;
    label.textContent = setting.label;

    const input = document.createElement('input');
    input.id = setting.name;
    input.name = setting.name;

    if (setting.type === 'checkbox') {
        input.type = 'checkbox';
        input.checked = setting.defaultValue;
    } else if (setting.type === 'number') {
        input.type = 'number';
        input.min = setting.min;
        input.max = setting.max;
        if (setting.step) input.step = setting.step;
        input.value = setting.defaultValue;
    }

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = setting.tooltip;

    const defaultValue = document.createElement('div');
    defaultValue.className = 'default-value';
    defaultValue.textContent = `Default: ${setting.defaultValue}`;

    const recommendedValue = document.createElement('div');
    recommendedValue.className = 'recommended-value';
    recommendedValue.textContent = `Recommended: ${setting.recommendedValue}`;

    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(tooltip);
    div.appendChild(defaultValue);
    div.appendChild(recommendedValue);

    return div;
}

function initForm() {
    const form = document.getElementById('configForm');
    
    if (Array.isArray(settings)) {
        // If settings is an array, treat it as a single section
        const section = document.createElement('div');
        section.className = 'section';
        settings.forEach(setting => {
            section.appendChild(createSettingElement(setting));
        });
        form.appendChild(section);
    } else {
        // If settings is an object, treat each property as a section
        for (const sectionName in settings) {
            if (settings.hasOwnProperty(sectionName)) {
                const section = document.createElement('div');
                section.className = 'section';
                const sectionTitle = document.createElement('h2');
                sectionTitle.textContent = sectionName;
                section.appendChild(sectionTitle);

                const sectionSettings = settings[sectionName];
                if (Array.isArray(sectionSettings)) {
                    sectionSettings.forEach(setting => {
                        section.appendChild(createSettingElement(setting));
                    });
                } else if (typeof sectionSettings === 'object') {
                    // If sectionSettings is an object, create elements for each property
                    for (const settingName in sectionSettings) {
                        if (sectionSettings.hasOwnProperty(settingName)) {
                            const setting = sectionSettings[settingName];
                            setting.name = settingName; // Ensure the setting has a name property
                            section.appendChild(createSettingElement(setting));
                        }
                    }
                }

                form.appendChild(section);
            }
        }
    }
}

function generateConfig() {
    let config = "";
    
    if (Array.isArray(settings)) {
        config += "[Settings]\n";
        settings.forEach(setting => {
            const element = document.getElementById(setting.name);
            if (element.type === 'checkbox' && element.checked) {
                config += `${setting.name}=1\n`;
            } else if (element.type === 'number') {
                config += `${setting.name}=${element.value}\n`;
            }
        });
    } else {
        for (const sectionName in settings) {
            if (settings.hasOwnProperty(sectionName)) {
                config += `[${sectionName}]\n`;
                const sectionSettings = settings[sectionName];
                if (Array.isArray(sectionSettings)) {
                    sectionSettings.forEach(setting => {
                        const element = document.getElementById(setting.name);
                        if (element.type === 'checkbox' && element.checked) {
                            config += `${setting.name}=1\n`;
                        } else if (element.type === 'number') {
                            config += `${setting.name}=${element.value}\n`;
                        }
                    });
                } else if (typeof sectionSettings === 'object') {
                    for (const settingName in sectionSettings) {
                        if (sectionSettings.hasOwnProperty(settingName)) {
                            const element = document.getElementById(settingName);
                            if (element.type === 'checkbox' && element.checked) {
                                config += `${settingName}=1\n`;
                            } else if (element.type === 'number') {
                                config += `${settingName}=${element.value}\n`;
                            }
                        }
                    }
                }
                config += "\n";
            }
        }
    }

    document.getElementById('output').textContent = config;
}

window.onload = initForm;