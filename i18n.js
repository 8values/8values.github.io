function i18n_load_ns(namespaces, callback) {
    var options = {
        // "whitelist": ["en", "de"],
        // "nonExplicitWhitelist": true,
        "fallbackLng": "en"
    }

    if (namespaces) options.ns = namespaces

    window.i18next
        .use(window.i18nextBrowserLanguageDetector)
        .use(window.i18nextXHRBackend)
        .init(options, function() {
            i18n_ready()
            if (callback) callback()
        })
}

function i18n_ready() {
    var fields = document.querySelectorAll("[data-i18n]")
    for (var i = 0; i < fields.length; i++) {
        fields[i].innerHTML=i18next.t(fields[i].dataset.i18n, fields[i].dataset)
    }
}