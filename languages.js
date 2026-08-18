/*
============================================================
KEYBOARD LANGUAGES

These affect ONLY the keyboard.

They do NOT translate the website.

To add another keyboard layout, add another object here.
============================================================
*/

const keyboardLanguages = {

    enru: {

        name: "English / Русский",
        shortName: "EN / RU",

        secondary: {

            Backquote: "ё",

            KeyQ: "й",
            KeyW: "ц",
            KeyE: "у",
            KeyR: "к",
            KeyT: "е",
            KeyY: "н",
            KeyU: "г",
            KeyI: "ш",
            KeyO: "щ",
            KeyP: "з",

            BracketLeft: "х",
            BracketRight: "ъ",

            KeyA: "ф",
            KeyS: "ы",
            KeyD: "в",
            KeyF: "а",
            KeyG: "п",
            KeyH: "р",
            KeyJ: "о",
            KeyK: "л",
            KeyL: "д",

            Semicolon: "ж",
            Quote: "э",

            KeyZ: "я",
            KeyX: "ч",
            KeyC: "с",
            KeyV: "м",
            KeyB: "и",
            KeyN: "т",
            KeyM: "ь",

            Comma: "б",
            Period: "ю"

        }

    },


    en: {

        name: "English",
        shortName: "EN",

        secondary: {}

    }

};


/*
============================================================
SITE LANGUAGES

These affect ONLY the interface.

They do NOT change keyboard letters.

Adding another website language later is simply:

    de: {
        name: "Deutsch",
        shortName: "DE",
        translations: {
            ...
        }
    }

============================================================
*/

const siteLanguages = {

    en: {

        name: "English",
        shortName: "EN",

        translations: {

            appTitle:
                "Keyboard Visualizer",

            appSubtitle:
                "EN / RU keyboard for demonstrations and screen recordings",

            siteLanguage:
                "🌐 Language",

            keyboardLayout:
                "Layout",

            settings:
                "Settings",

            mode:
                "Mode",

            layout:
                "Layout",

            siteLanguageLabel:
                "Site",

            siteLanguageTitle:
                "🌐 Site Language",

            layoutTitle:
                "⌨ Keyboard Layout",

            visuals:
                "🎨 Visuals",

            keyboard:
                "⌨ Keyboard",

            visualsDescription:
                "Control the keypress animation.",

            keyboardDescription:
                "Configure keyboard behavior.",

            keyAnimation:
                "Key animation",

            keyAnimationDescription:
                "Animate keys when pressed.",

            flashCount:
                "Number of flashes",

            flashCountDescription:
                "Number of pulses for each key.",

            animationSpeed:
                "Animation speed",

            animationSpeedDescription:
                "Speed of each pulse.",

            keyFontSize:
                "Key font size",

            keyFontSizeDescription:
                "Adjust the size of the labels on the keys.",

            showShiftSymbols:
                "Show Shift symbols",

            showShiftSymbolsDescription:
                "Display the upper symbols on the number row.",

            mouseModifierMode:
                "Mouse modifier mode",

            mouseModifierDescription:
                "Keep mouse-clicked modifiers held.",

            combinationDisplay:
                "Combination display",

            combinationDescription:
                "Show the active combination above the keyboard.",

            keyboardMode:
                "Keyboard mode",

            keyboardModeDescription:
                "Compact is the default.",

            automaticSizing:
                "Automatic sizing",

            automaticSizingDescription:
                "Scale keyboard to fit the window.",

            compact:
                "Compact",

            full:
                "Full",

            reset:
                "Reset pressed keys",

            hint:
                "For key-combinations press Ctrl / Shift / Alt / Win + key OR click Ctrl / Shift / Alt / Win to hold it, then click another key.",

            middleHint:
                "Middle mouse button: click a key to keep it pressed (pulsing), click it again to release.",

            overlayMode:
                "Overlay mode",

            overlayModeDescription:
                "Transparent background for use as an overlay.",

            noCombination:
                "Pressed buttons will appear here"

        }

    },


    ru: {

        name: "Русский",
        shortName: "RU",

        translations: {

            appTitle:
                "Визуализатор клавиатуры",

            appSubtitle:
                "Клавиатура EN / RU для демонстраций и записи экрана",

            siteLanguage:
                "🌐 Язык",

            keyboardLayout:
                "Раскладка",

            settings:
                "Настройки",

            mode:
                "Режим",

            layout:
                "Раскладка",

            siteLanguageLabel:
                "Сайт",

            siteLanguageTitle:
                "🌐 Язык страницы",

            layoutTitle:
                "⌨ Раскладка клавиатуры",

            visuals:
                "🎨 Внешний вид",

            keyboard:
                "⌨ Клавиатура",

            visualsDescription:
                "Управление анимацией нажатий.",

            keyboardDescription:
                "Настройка поведения клавиатуры.",

            keyAnimation:
                "Пульсация клавиш",

            keyAnimationDescription:
                "Включить пульсацию клавиш при нажатии.",

            flashCount:
                "Количество вспышек",

            flashCountDescription:
                "Количество вспышек пульсации.",

            animationSpeed:
                "Скорость пульсации",

            animationSpeedDescription:
                "Время между вспышками пульсации.",

            keyFontSize:
                "Размер шрифта клавиш",

            keyFontSizeDescription:
                "Настройка размера подписей на клавишах.",

            showShiftSymbols:
                "Показывать символы Shift",

            showShiftSymbolsDescription:
                "Отображать верхние символы на ряду цифр.",

            mouseModifierMode:
                "Режим зажатых Ctrl / Shift / Alt / Win",

            mouseModifierDescription:
                "Оставлять кликнутые Ctrl / Shift / Alt / Win нажатыми.",

            combinationDisplay:
                "Отображать комбинацию клавиш",

            combinationDescription:
                "Отображать одновременно нажатые клавиши в панели над клавиатурой.",

            keyboardMode:
                "Режим клавиатуры",

            keyboardModeDescription:
                "Компактный режим используется по умолчанию.",

            automaticSizing:
                "Автоматический размер клавиатуры.",

            automaticSizingDescription:
                "Подстраивать размер клавиатуры под размер окна.",

            compact:
                "Компактный",

            full:
                "Полный",

            reset:
                "Сбросить все нажатые клавиши",

            hint:
                "Для комбинаций клавиш: зажмите на своей клавиатуре Ctrl / Shift / Alt / Win и нажмите любую кнопку ИЛИ щелкните Ctrl / Shift / Alt / Win, чтобы их зажать, а затем нажмите другую клавишу.",

            middleHint:
                "Средняя кнопка мыши: щелкните клавишу, чтобы удерживать её нажатой (пульсация), щелкните ещё раз, чтобы отпустить.",

            overlayMode:
                "Режим оверлея",

            overlayModeDescription:
                "Прозрачный фон для использования поверх изображения.",

            noCombination:
                "Нажатые кнопки появятся здесь"

        }
    }
}