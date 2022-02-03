#  ninelines-ua-parser

Обертка библиотеки [ua-parser-js](https://github.com/faisalman/ua-parser-js), которая автоматически проставляет классы
`<html>` элементу.

## Установка

### NPM

```bash
npm install --save ninelines-ua-parser
```

## Использование

После установки необходимо подключить библиотеку:

```js
import 'ninelines-ua-parser';
```

> При отсутствии модульной системы библиотека (`dist/ninelines-ua-parser.js`) экспортирует `UAParser` в глобальный объект `ninelines`.
> ```js
> new ninelines.UAParser();
> ```

Основная информация описана в [документации ua-parser-js](https://github.com/faisalman/ua-parser-js).

Данная библиотека устанавливает следующие классы:

* `is-device-{model}` - модель устройства;
* `is-device-{type}` - тип устройства (mobile, tablet, desktop);
* `is-os-{name}` - название операционной системы (windows, mac-os, linux, android, ios);
* `is-engine-{name}` - движок браузера (edgehtml, gecko, trident, webkit);
* `is-browser-{name}` - название браузера (chrome, edge, firefox, safari, mobile-safari, opera, ucbrowser, yandex);

Пример:

```html
<!doctype html>
<html class="is-device-desktop is-os-windows is-os-windows-10 is-engine-webkit is-browser-chrome is-browser-chrome-64" lang="ru">
    <!-- ... -->
</html>
```

## Участники проекта

<a href="https://github.com/ninelines-team/ninelines-ua-parser/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ninelines-team/ninelines-ua-parser" />
</a>

Сделано через [contributors-img](https://contrib.rocks).
