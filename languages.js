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

            credit:
                "Crafted with extensive help of SourceCraft Code Assistant",

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

            keyHoldTime:
                "Key hold time",

            keyHoldTimeDescription:
                "How long a clicked key stays highlighted.",

            animationSpeed:
                "Animation speed",

            animationSpeedDescription:
                "Delay between pulses.",

            keyFontSize:
                "Key font size",

            keyFontSizeDescription:
                "Adjust the size of the labels on the keys.",

            showShiftSymbols:
                "Show Shift symbols",

            showShiftSymbolsDescription:
                "Display the upper Shift symbols on the keys.",

            mouseModifierMode:
                "Mouse modifier mode",

            mouseModifierDescription:
                "Keep mouse-clicked modifiers held.",

            highlightBothModifiers:
                "Highlight both modifier sides",

            highlightBothModifiersDescription:
                "When enabled, pressing either Ctrl/Shift/Alt/Win highlights both sides.",

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

            general:
                "General",

            generalDescription:
                "Input behavior and interactions.",

            mouseOnlyMode:
                "Mouse-only mode",

            mouseOnlyModeDescription:
                "Disable physical key capture; activate keys only with the left and middle mouse buttons.",

            compact:
                "Compact",

            full:
                "Full",

            reset:
                "Reset pressed keys",

            hint:
                "For key-combinations press Ctrl / Shift / Alt / Win + key OR click Ctrl / Shift / Alt / Win to hold it, then click another key.",

            middleHint:
                "Click any with middle mouse button key to keep it pressed, click it again to release.",

            overlayMode:
                "Overlay mode",

            overlayModeDescription:
                "Transparent background for use as an overlay.",

            overlayAlignH:
                "Horizontal alignment",

            overlayAlignHDescription:
                "Horizontal position of the keyboard in overlay mode.",

            overlayAlignV:
                "Vertical alignment",

            overlayAlignVDescription:
                "Vertical position of the keyboard in overlay mode.",

            alignLeft:
                "Left",

            alignCenter:
                "Center",

            alignRight:
                "Right",

            alignTop:
                "Top",

            alignBottom:
                "Bottom",

            resetSettings:
                "Reset settings to defaults",

            resetSettingsDescription:
                "Restore all settings to their original values.",

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

            credit:
                "Создано с помощью SourceCraft Code Assistant",

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

            keyHoldTime:
                "Время удержания клавиши",

            keyHoldTimeDescription:
                "Как долго клавиша остаётся подсвеченной при нажатии.",

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
                "Отображать верхние символы Shift на клавишах.",

            mouseModifierMode:
                "Режим зажатых Ctrl / Shift / Alt / Win",

            mouseModifierDescription:
                "Оставлять кликнутые Ctrl / Shift / Alt / Win нажатыми.",

            highlightBothModifiers:
                "Подсвечивать обе стороны модификаторов",

            highlightBothModifiersDescription:
                "Нажатие Ctrl/Shift/Alt/Win будет подсвечивать эти клавиши с обеих сторон.",

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

            general:
                "Общие",

            generalDescription:
                "Поведение ввода и взаимодействие.",

            mouseOnlyMode:
                "Режим мыши",

            mouseOnlyModeDescription:
                "Отключить захват физических клавиш; активировать клавиши только левой и средней кнопками мыши.",

            compact:
                "Компактный",

            full:
                "Полный",

            reset:
                "Сбросить все нажатые клавиши",

            hint:
                "Для комбинаций клавиш: зажмите на своей клавиатуре Ctrl / Shift / Alt / Win и нажмите любую кнопку ИЛИ щелкните Ctrl / Shift / Alt / Win, чтобы их зажать, а затем нажмите другую клавишу.",

            middleHint:
                "Щелкните любую клавишу колесом мыши, чтобы удерживать её нажатой, щелкните ещё раз, чтобы отпустить.",

            overlayMode:
                "Режим оверлея",

            overlayModeDescription:
                "Прозрачный фон для использования поверх изображения.",

            overlayAlignH:
                "Горизонтальное выравнивание",

            overlayAlignHDescription:
                "Горизонтальное положение клавиатуры в режиме оверлея.",

            overlayAlignV:
                "Вертикальное выравнивание",

            overlayAlignVDescription:
                "Вертикальное положение клавиатуры в режиме оверлея.",

            alignLeft:
                "Слева",

            alignCenter:
                "По центру",

            alignRight:
                "Справа",

            alignTop:
                "Сверху",

            alignBottom:
                "Снизу",

            resetSettings:
                "Сбросить настройки",

            resetSettingsDescription:
                "Вернуть все настройки к значениям по умолчанию.",

            noCombination:
                "Нажатые кнопки появятся здесь"

        }
    }
}