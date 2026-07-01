// AUTO-GENERATED from the content workflow, then review + polish + reposition + coherence fixes applied.
// Edit copy here directly.
// Selected work — client-facing, anonymized by client. `quote.placeholder`
// marks quotes as fillers to replace with real testimonials before showing them.
export const cases = {
  "ru": [
    {
      "id": "docs-ai",
      "kind": "docs",
      "industry": "Бухгалтерия и налоги",
      "taskType": "Автоматизация рутины",
      "resultTitle": "Разбор архива бухгалтерских сканов: недели ручной сверки — за часы",
      "oneLiner": "Помощник сам делит сканы на отдельные документы, считывает номер, дату, сумму и контрагента и сверяет их с вашим реестром.",
      "before": "недели ручной сверки",
      "after": "часы автоматической работы",
      "clientTask": "Компания с большим бумажным архивом бухгалтерских документов. Нужно было разобрать десятки тысяч отсканированных страниц и сверить их с учётным реестром — не тратя на это месяцы ручной работы.",
      "pain": "В архиве — тысячи сканов вперемешку, часто по несколько документов в одном файле. Каждый нужно открыть, найти номер, дату, сумму и контрагента, а потом построчно сверить с реестром. Люди уставали, ошибались, а сверка растягивалась на недели и отвлекала бухгалтерию от текущих дел.",
      "solution": "Сделали помощника, который сам делит каждый скан на отдельные документы, распознаёт их тип и вытаскивает ключевые данные — номер, дату, сумму, контрагента, — а затем находит нужную строку в реестре и сверяет. Проверяли на реальном архиве, чтобы результату можно было доверять. Спорные и непонятные случаи помощник помечает отдельно — человек быстро смотрит только их, а не весь архив.",
      "results": [
        {
          "value": "330 000",
          "unit": "документов разобрано и сверено"
        },
        {
          "value": "~95%",
          "unit": "документов сверяются без участия человека"
        },
        {
          "value": "недели → часы",
          "unit": "на разбор всего архива"
        }
      ],
      "quote": {
        "text": "Раньше разбор архива был отдельным проектом на несколько человек и на пару недель. Теперь запускаем утром — к вечеру почти всё разобрано и сверено, руками остаётся глянуть только спорное.",
        "name": "И. В.",
        "role": "главный бухгалтер производственной компании",
        "placeholder": true
      }
    },
    {
      "id": "defect-sheets",
      "kind": "blueprint",
      "industry": "Капитальный ремонт",
      "taskType": "Автоматизация рутины",
      "resultTitle": "Дефектная ведомость — за пару минут вместо полдня в Excel",
      "oneLiner": "Программа сама считает объёмы работ и материалы по вашим формулам и собирает готовую дефектную ведомость строго по образцу заказчика — с выгрузкой в PDF.",
      "before": "ведомости вручную в Excel",
      "after": "документ по кнопке",
      "clientTask": "Подрядчик по капитальному ремонту. Нужно было перестать вручную считать объёмы работ и материалов и вручную оформлять дефектные ведомости под образец заказчика — процесс съедал время инженеров и давал ошибки.",
      "pain": "Каждую ведомость собирали в Excel вручную: перепроверяли формулы, подставляли материалы, следили, чтобы всё сошлось с образцом заказчика. Один документ на крупный объект — полдня работы инженера. Плюс постоянный риск арифметической ошибки, из-за которой ведомость возвращали на переделку.",
      "solution": "Сделали программу, где инженер вносит размеры и параметры на наглядной схеме, а объёмы работ и материалов считаются сами по заданным формулам. Программа сразу собирает дефектную ведомость точно по образцу заказчика и выгружает готовый PDF. Поменяли что-то на схеме — документ пересобирается заново, без ручной переделки.",
      "results": [
        {
          "value": "2 минуты",
          "unit": "на ведомость вместо полдня"
        },
        {
          "value": "0",
          "unit": "ручных расчётов и арифметических ошибок"
        },
        {
          "value": "1 клик",
          "unit": "и готовый PDF по образцу заказчика"
        }
      ],
      "quote": {
        "text": "Раньше ведомость на большой объект отнимала у инженера полдня. Теперь вносим размеры на схеме — и документ готов по образцу. Пересчёты вручную и ошибки в цифрах ушли совсем.",
        "name": "И. С.",
        "role": "Руководитель компании по капитальному ремонту",
        "placeholder": true
      }
    },
    {
      "id": "practice-saas",
      "kind": "saas",
      "industry": "Частная практика (психологи/коучи)",
      "taskType": "Сайты и сервисы",
      "resultTitle": "Клиенты записываются и платят сами, а специалист занимается только сессиями",
      "oneLiner": "Личный онлайн-кабинет, где клиент сам выбирает время, оплачивает и заходит на видеосессию прямо в браузере — без ссылок и Zoom.",
      "before": "запись и оплата вручную",
      "after": "всё оформляется само",
      "clientTask": "Частный специалист помогающей практики (психолог/коуч), который вёл всё вручную: сам согласовывал время в переписке, принимал оплату, отправлял ссылки на видео. Нужен был один сервис, где клиент делает всё сам, а специалист занимается только работой с людьми.",
      "pain": "Половина рабочего дня уходила на переписку: согласовать время, напомнить, скинуть реквизиты, потом ссылку на созвон. Клиенты забывали про сессии и терялись деньги за неявки. Заметки после встреч копились в блокнотах и заметках телефона — найти нужное перед новой сессией было тяжело. А хранить данные клиентов в мессенджерах было и неудобно, и небезопасно.",
      "solution": "Сделали личный онлайн-сервис под ключ. Клиент заходит в свой кабинет, сам выбирает свободное время, сразу оплачивает и в назначенный час нажимает одну кнопку — видеосессия открывается прямо в браузере, без Zoom, установок и пересылки ссылок. Напоминания клиенту и специалисту уходят сами. После сессии умный помощник собирает короткие заметки и план дальнейшей работы, чтобы перед следующей встречей всё было под рукой. Данные клиентов хранятся по правилам закона о персональных данных.",
      "results": [
        {
          "value": "~2 часа в день",
          "unit": "освободилось от переписки и рутины"
        },
        {
          "value": "0 ссылок",
          "unit": "клиент заходит на сессию в один клик"
        },
        {
          "value": "меньше неявок",
          "unit": "благодаря напоминаниям и предоплате"
        }
      ],
      "quote": {
        "text": "Раньше я целыми днями сидела в переписке про время и оплату. Теперь клиенты записываются и платят сами, а я просто открываю кабинет и работаю. И больше не боюсь забыть, о чём мы говорили в прошлый раз.",
        "name": "М. С.",
        "role": "частный психолог",
        "placeholder": true
      }
    },
    {
      "id": "crypto-desk",
      "kind": "crypto",
      "industry": "Трейдинг",
      "taskType": "Цифры бизнеса на одном экране",
      "resultTitle": "Один экран вместо десятка вкладок: трейдер видит движения крупных игроков и получает сигналы, не сидя в графиках сутками",
      "oneLiner": "Экран, который сам следит за рынком: где заходят крупные деньги, где закрывают позиции по ликвидации, куда идут потоки, — и присылает уведомление, когда пора действовать.",
      "before": "десятки вкладок и сервисов",
      "after": "один экран со всем",
      "clientTask": "Клиент — активный трейдер и небольшое сообщество трейдеров. Нужен был один инструмент, который сам собирает данные с рынка, показывает действия крупных игроков и вовремя подсказывает, когда что-то происходит, — чтобы не сидеть в графиках круглосуточно.",
      "pain": "Данные были разбросаны по десяткам вкладок и сервисов. Чтобы не пропустить момент, приходилось быть у экрана постоянно — а самые резкие движения всё равно случались, пока трейдер отходил или спал. Из-за задержек и ручного пересчёта решения принимались с опозданием, и часть возможностей уходила.",
      "solution": "Собрали всё в одном рабочем экране, где видно сделки крупных игроков, закрытия позиций по ликвидации и куда движутся деньги. Данные обновляются без задержки, поэтому картина всегда актуальная. Встроенный помощник (как аналитик, который смотрит на рынок круглосуточно и не устаёт) сам разбирает происходящее и присылает уведомление, когда наступает важный момент, — сидеть в графиках больше не нужно.",
      "results": [
        {
          "value": "1 экран",
          "unit": "вся аналитика вместо десятков вкладок"
        },
        {
          "value": "24/7",
          "unit": "следит за рынком и присылает сигналы вместо вас"
        },
        {
          "value": "0",
          "unit": "задержки — рынок виден в реальном времени"
        }
      ],
      "quote": {
        "text": "Раньше боялся отойти от компьютера — теперь просто жду уведомление и захожу, когда действительно нужно. Вся картина рынка перед глазами за секунды.",
        "name": "Д. В.",
        "role": "частный трейдер",
        "placeholder": true
      }
    },
    {
      "id": "legal-agent",
      "kind": "chat",
      "industry": "Юридические услуги",
      "taskType": "Общение и заявки без сотрудника",
      "resultTitle": "Адвокат больше не сидит в четырёх мессенджерах: типовые вопросы и запись идут сами",
      "oneLiner": "Умный помощник принимает обращения из WhatsApp, Telegram, Instagram и ВКонтакте в одно окно, отвечает на вопросы и записывает на консультацию — круглосуточно.",
      "before": "заявки терялись в переписке",
      "after": "каждый клиент обработан",
      "clientTask": "Адвокатский кабинет: обращения приходили из WhatsApp, Telegram, Instagram и ВКонтакте, отвечать на них лично не всегда получалось. Нужно было перестать терять клиентов, которые пишут вечером или в выходной, и разгрузить адвоката от переписки по типовым вопросам.",
      "pain": "Человек с юридической проблемой пишет, когда ему тревожно — часто ночью или в выходной. Если ответа нет в течение получаса, он идёт к другому. Адвокат физически не мог держать четыре мессенджера открытыми и отвечать мгновенно: часть сообщений тонула, на одни и те же вопросы про цену и порядок работы приходилось отвечать по десять раз в день, а запись на консультацию велась вручную в блокноте и заметках.",
      "solution": "Собрали все четыре канала в одно окно и подключили помощника, который отвечает вместо адвоката, пока тот занят или спит. Он вежливо расспрашивает обратившегося о сути дела, отвечает на частые вопросы про стоимость и порядок работы, предлагает свободное время и записывает на консультацию, а карточку клиента заводит автоматически. Если случай сложный или человек просит живого специалиста — сразу передаёт диалог адвокату и помечает как срочный. Адвокат в любой момент видит всю переписку и может вмешаться.",
      "results": [
        {
          "value": "24/7",
          "unit": "отвечает клиентам, включая ночь и выходные"
        },
        {
          "value": "4 канала",
          "unit": "WhatsApp, Telegram, Instagram и ВКонтакте в одном окне"
        },
        {
          "value": "за секунды",
          "unit": "первый ответ вместо ожидания до вечера"
        }
      ],
      "quote": {
        "text": "Раньше я терял людей, которые писали ночью, — утром они уже были у другого адвоката. Теперь на них сразу отвечают и записывают на консультацию, а мне остаётся только прийти на встречу подготовленным.",
        "name": "Д. Р.",
        "role": "адвокат, частный кабинет",
        "placeholder": true
      }
    },
    {
      "id": "bim-agent",
      "kind": "bim",
      "industry": "Инженерное проектирование",
      "taskType": "Автоматизация рутины",
      "resultTitle": "Разводка водопровода и канализации за минуты вместо часа ручной работы",
      "oneLiner": "Помощник встроен в привычную инженеру программу: сам собирает разводку труб по действующим нормам, оформляет чертежи и тут же проверяет их на ошибки.",
      "before": "инженер моделирует руками",
      "after": "агент собирает по нормам",
      "clientTask": "Проектная организация, которая занимается инженерными сетями зданий. Нужно было снять с инженеров однотипную ручную работу при проектировании водопровода и канализации, чтобы они не тратили часы на разводку труб и оформление, а успевали больше проектов в срок.",
      "pain": "Каждый проект — это часы однообразной работы: вручную развести трубы, оформить чертёж, перепроверить всё по СП и ГОСТ. Пропущенная норма всплывает уже на согласовании и заставляет переделывать. Инженеры перегружены рутиной, а сроки по проектам ползут.",
      "solution": "Сделали помощника прямо внутри программы, в которой инженер уже работает. Инженер задаёт исходные данные — помощник сам собирает разводку водопровода и канализации по действующим нормам (СП, ГОСТ), оформляет чертежи и тут же проверяет их на ошибки. На выходе — готовый узел, который остаётся только утвердить. Правила легко обновлять, когда меняются нормы.",
      "results": [
        {
          "value": "Час → минуты",
          "unit": "на разводку одного узла"
        },
        {
          "value": "до 90%",
          "unit": "меньше ручной рутины у инженера"
        },
        {
          "value": "СП и ГОСТ",
          "unit": "проверка по нормам автоматически"
        }
      ],
      "quote": {
        "text": "То, на что уходил час, теперь готово за пару минут и уже проверено по нормам. Инженеры перестали тонуть в рутине и берут больше проектов.",
        "name": "И. С.",
        "role": "руководитель проектного отдела инженерных сетей (плейсхолдер — заменим на реальный отзыв)",
        "placeholder": true
      }
    },
    {
      "id": "marketing-site",
      "kind": "web",
      "industry": "Оценка недвижимости",
      "taskType": "Сайты и сервисы",
      "resultTitle": "Сайт, который приносит заявки на оценку, а не просто висит визиткой",
      "oneLiner": "Сайт оценочной компании с калькулятором стоимости и формами: клиент сам считает цену и оставляет заявку, а она сразу падает вам в мессенджер.",
      "before": "визитка без заявок",
      "after": "поток заявок с сайта",
      "clientTask": "Клиент — компания, которая оценивает недвижимость (квартиры, дома, коммерцию) для сделок, наследства и банков. Нужен был сайт, который понятно показывает услуги и примеры работ и стабильно приводит новые заявки, а не просто «есть в интернете для галочки».",
      "pain": "Старый сайт был по сути электронной визиткой: долго открывался, особенно с телефона, почти не показывался в поиске по запросам вроде «оценка квартиры для банка». Люди не понимали, сколько будет стоить, и уходили к конкурентам. Заявки приходили редко и терялись в общей почте.",
      "solution": "Собрали новый сайт под ключ: понятный каталог услуг и примеры выполненных оценок, калькулятор — клиент выбирает тип объекта и сразу видит примерную стоимость и срок. Форму заявки настроили так, чтобы обращение мгновенно приходило туда, где вы его точно увидите, — в мессенджер, ничего не теряется. Сайт открывается мгновенно даже с телефона и подготовлен так, чтобы его находили в поиске.",
      "results": [
        {
          "value": "за 1 сек",
          "unit": "открывается даже с телефона"
        },
        {
          "value": "24/7",
          "unit": "калькулятор считает цену без вашего участия"
        },
        {
          "value": "0",
          "unit": "потерянных заявок — приходят сразу в мессенджер"
        }
      ],
      "quote": {
        "text": "Раньше сайт просто висел, а теперь люди сами считают стоимость и оставляют заявки — они приходят мне сразу, ничего не теряется. Наконец-то сайт работает на нас.",
        "name": "Д. В.",
        "role": "руководитель оценочной компании",
        "placeholder": true
      }
    }
  ],
  "en": [
    {
      "id": "docs-ai",
      "kind": "docs",
      "industry": "Accounting & Tax",
      "taskType": "Automating routine work",
      "resultTitle": "Sorting through an archive of accounting scans: weeks of manual checking, done in hours",
      "oneLiner": "The assistant splits scans into individual documents on its own, reads off the number, date, amount, and counterparty, and matches them against your records.",
      "before": "weeks of manual matching",
      "after": "hours, automatic",
      "clientTask": "A company with a large paper archive of accounting documents. They needed to work through tens of thousands of scanned pages and match them against their bookkeeping records — without spending months on manual work.",
      "pain": "The archive held thousands of scans all mixed together, often with several documents in a single file. Each one had to be opened, its number, date, amount, and counterparty found, and then checked line by line against the records. People got tired, made mistakes, and the checking dragged on for weeks, pulling the accounting team away from their day-to-day work.",
      "solution": "We built an assistant that splits each scan into separate documents on its own, recognizes the type of each one, and pulls out the key details — number, date, amount, counterparty — then finds the matching line in the records and checks it. We tested it on a real archive, so the results can be trusted. Anything unclear or in question the assistant flags separately, so a person quickly looks over just those cases rather than the whole archive.",
      "results": [
        {
          "value": "330,000",
          "unit": "documents sorted and matched"
        },
        {
          "value": "~95%",
          "unit": "of documents matched with no human involved"
        },
        {
          "value": "weeks → hours",
          "unit": "to work through the whole archive"
        }
      ],
      "quote": {
        "text": "Working through the archive used to be a separate project — several people, a couple of weeks. Now we start it in the morning, and by evening almost everything is sorted and matched, with only the tricky cases left to check by hand.",
        "name": "I. V.",
        "role": "chief accountant at a manufacturing company",
        "placeholder": true
      }
    },
    {
      "id": "defect-sheets",
      "kind": "blueprint",
      "industry": "Major repairs & renovation",
      "taskType": "Automating routine work",
      "resultTitle": "Defect sheet — a couple of minutes instead of half a day in Excel",
      "oneLiner": "The program works out the volumes of work and materials using your own formulas and puts together a finished defect sheet in exactly the format your client asks for — ready to export as a PDF.",
      "before": "sheets by hand in Excel",
      "after": "a document in one click",
      "clientTask": "A renovation and major-repairs contractor. They needed to stop working out volumes of work and materials by hand and stop putting together defect sheets by hand to match the client's required format — it was eating up the engineers' time and causing mistakes.",
      "pain": "Every sheet was put together by hand in Excel: double-checking the formulas, plugging in materials, making sure everything matched the client's required format. A single document for a large site took an engineer half a day. On top of that, there was a constant risk of an arithmetic slip that would get the sheet sent back for redoing.",
      "solution": "We built a program where the engineer enters the measurements and details on a clear drawing, and the volumes of work and materials are worked out automatically using the set formulas. The program immediately puts together the defect sheet in exactly the client's required format and exports a finished PDF. Change something on the drawing, and the document is rebuilt from scratch — no redoing it by hand.",
      "results": [
        {
          "value": "2 minutes",
          "unit": "per sheet instead of half a day"
        },
        {
          "value": "0",
          "unit": "manual calculations and arithmetic mistakes"
        },
        {
          "value": "1 click",
          "unit": "and a finished PDF in the client's format"
        }
      ],
      "quote": {
        "text": "A sheet for a big site used to take an engineer half a day. Now we enter the measurements on the drawing and the document is ready in the right format. Recalculating by hand and mistakes in the numbers are gone for good.",
        "name": "I. S.",
        "role": "Head of a renovation and major-repairs company",
        "placeholder": true
      }
    },
    {
      "id": "practice-saas",
      "kind": "saas",
      "industry": "Private practice (therapists & coaches)",
      "taskType": "Websites & online services",
      "resultTitle": "Clients book and pay on their own, so the specialist can focus only on sessions",
      "oneLiner": "A personal online space where the client picks a time, pays, and joins the video session right in the browser — no links, no Zoom.",
      "before": "booking & payments by hand",
      "after": "it all runs itself",
      "clientTask": "A solo therapist or coach who was doing everything by hand: agreeing on times over chat, taking payments, and sending out video links. They needed a single service where the client does it all themselves, so the specialist can focus purely on working with people.",
      "pain": "Half the workday went to messaging: agreeing on a time, sending reminders, sharing payment details, then passing along the call link. Clients would forget about sessions, and money was lost to no-shows. Notes from meetings piled up in notebooks and phone memos, and finding the right one before a new session was hard. On top of that, keeping client information in messaging apps was both awkward and unsafe.",
      "solution": "We built a personal online service, fully done for them. The client logs into their own space, picks an open time, pays right away, and at the appointed hour presses a single button — the video session opens straight in the browser, with no Zoom, no installs, and no links to pass around. Reminders go out to both the client and the specialist automatically. After each session, a smart assistant pulls together short notes and a plan for what's next, so everything is at hand before the next meeting. Client data is stored in line with personal-data protection law.",
      "results": [
        {
          "value": "~2 hours a day",
          "unit": "freed up from messaging and busywork"
        },
        {
          "value": "0 links",
          "unit": "the client joins the session in one click"
        },
        {
          "value": "fewer no-shows",
          "unit": "thanks to reminders and upfront payment"
        }
      ],
      "quote": {
        "text": "I used to spend whole days messaging back and forth about times and payments. Now clients book and pay on their own, and I just open my dashboard and get to work. And I no longer worry about forgetting what we talked about last time.",
        "name": "M. S.",
        "role": "private therapist",
        "placeholder": true
      }
    },
    {
      "id": "crypto-desk",
      "kind": "crypto",
      "industry": "Trading",
      "taskType": "Your numbers on one screen",
      "resultTitle": "One screen instead of a dozen tabs: the trader sees what the big players are doing and gets alerts, without living inside the charts around the clock",
      "oneLiner": "A screen that watches the market for you: where the big money is coming in, where positions are being closed out on liquidation, where the flows are heading, and it sends you an alert the moment it is time to act.",
      "before": "dozens of tabs and services",
      "after": "one screen with it all",
      "clientTask": "The client is an active trader and a small community of traders. They needed a single tool that gathers market data on its own, shows what the big players are doing, and gives a timely heads-up when something is happening, so they do not have to sit in front of the charts around the clock.",
      "pain": "The data was scattered across dozens of tabs and services. To avoid missing the moment, the trader had to stay at the screen constantly, and the sharpest moves still happened while they stepped away or slept. Because of the delays and manual number-crunching, decisions came too late and some opportunities slipped by.",
      "solution": "We brought everything together on one working screen that shows the trades of the big players, positions being closed out on liquidation, and where the money is moving. The data updates with no delay, so the picture is always current. A built-in assistant (like an analyst who watches the market around the clock and never gets tired) makes sense of what is happening on its own and sends an alert when an important moment arrives, so there is no need to sit in the charts anymore.",
      "results": [
        {
          "value": "one screen",
          "unit": "all the analytics instead of dozens of tabs"
        },
        {
          "value": "24/7",
          "unit": "watches the market and sends signals in your place"
        },
        {
          "value": "0",
          "unit": "delay — the market is shown in real time"
        }
      ],
      "quote": {
        "text": "I used to be afraid to step away from the computer. Now I just wait for the alert and jump in when it really matters. The whole market picture is in front of me in seconds.",
        "name": "D. V.",
        "role": "private trader",
        "placeholder": true
      }
    },
    {
      "id": "legal-agent",
      "kind": "chat",
      "industry": "Legal services",
      "taskType": "Customer chat & bookings, handled",
      "resultTitle": "The lawyer no longer lives in four messaging apps: routine questions and bookings run themselves",
      "oneLiner": "A smart assistant handles messages from WhatsApp, Telegram, Instagram, and VKontakte in one place, answers questions, and books consultations — around the clock.",
      "before": "leads lost in the chat",
      "after": "every client handled",
      "clientTask": "A solo law practice: enquiries were arriving through WhatsApp, Telegram, Instagram, and VKontakte, and answering each one personally wasn't always possible. The goal was to stop losing clients who write in the evening or on weekends, and to free the lawyer from repetitive back-and-forth on routine questions.",
      "pain": "Someone with a legal problem writes when they're anxious — often late at night or on a weekend. If there's no reply within half an hour, they move on to another lawyer. It simply wasn't possible to keep four messaging apps open and reply instantly: some messages got buried, the same questions about pricing and how things work came up ten times a day, and consultations were booked by hand in a notebook and phone notes.",
      "solution": "We brought all four channels into one place and set up an assistant that answers on the lawyer's behalf while he's busy or asleep. It politely asks the person about their situation, answers common questions about pricing and how the work is done, offers available time slots, books the consultation, and creates the client record automatically. If a case is complex or the person asks to speak with a real specialist, it hands the conversation straight to the lawyer and flags it as urgent. The lawyer can see the full conversation at any moment and step in.",
      "results": [
        {
          "value": "24/7",
          "unit": "answering clients, including nights and weekends"
        },
        {
          "value": "4 channels",
          "unit": "WhatsApp, Telegram, Instagram, and VKontakte in one place"
        },
        {
          "value": "within seconds",
          "unit": "first reply instead of waiting until evening"
        }
      ],
      "quote": {
        "text": "I used to lose people who wrote at night — by morning they'd already found another lawyer. Now they get an answer right away and a consultation is booked, and all I have to do is show up prepared.",
        "name": "D. R.",
        "role": "lawyer, private practice",
        "placeholder": true
      }
    },
    {
      "id": "bim-agent",
      "kind": "bim",
      "industry": "Engineering design",
      "taskType": "Automating routine work",
      "resultTitle": "Water and sewer pipe layouts done in minutes instead of an hour of manual work",
      "oneLiner": "The assistant works right inside the program your engineers already use: it lays out the pipework to current standards, prepares the drawings, and checks them for mistakes on the spot.",
      "before": "modelled by hand",
      "after": "built to code by the agent",
      "clientTask": "A design firm that plans the water and sewer systems for buildings. They wanted to take the repetitive manual work off their engineers when designing water supply and drainage, so people would not spend hours on pipe layouts and paperwork and could deliver more projects on time.",
      "pain": "Every project meant hours of repetitive work: lay out the pipes by hand, prepare the drawing, and double-check everything against the building codes and standards. A missed rule would surface during approval and force a redo. Engineers were buried in routine, and project deadlines kept slipping.",
      "solution": "We built an assistant right inside the program the engineer already works in. The engineer enters the starting details, and the assistant lays out the water and drainage pipework to current standards, prepares the drawings, and checks them for mistakes on the spot. The result is a finished connection point that only needs to be approved. The rules are easy to update whenever the standards change.",
      "results": [
        {
          "value": "An hour to minutes",
          "unit": "per pipe connection layout"
        },
        {
          "value": "up to 90%",
          "unit": "less manual routine for the engineer"
        },
        {
          "value": "Codes and standards",
          "unit": "checked automatically"
        }
      ],
      "quote": {
        "text": "What used to take an hour is now ready in a couple of minutes, already checked against the standards. Engineers stopped drowning in routine and are taking on more projects.",
        "name": "I. S.",
        "role": "head of the building systems design department (placeholder, to be replaced with a real testimonial)",
        "placeholder": true
      }
    },
    {
      "id": "marketing-site",
      "kind": "web",
      "industry": "Property valuation",
      "taskType": "Websites & online services",
      "resultTitle": "A website that brings in valuation requests instead of just sitting there as a business card",
      "oneLiner": "A website for a property valuation company with a price calculator and request forms: the client works out the price themselves and leaves a request, and it lands straight in your messaging app.",
      "before": "a card with no leads",
      "after": "a steady stream of leads",
      "clientTask": "The client is a company that values property (flats, houses, commercial spaces) for sales, inheritance, and banks. They needed a website that clearly shows their services and examples of past work and steadily brings in new requests, rather than just being online for the sake of it.",
      "pain": "The old site was basically a digital business card: slow to open, especially on a phone, and it hardly ever showed up in search for things like \"flat valuation for a bank.\" People couldn't tell how much it would cost, so they went to competitors. Requests came in rarely and got lost in a shared inbox.",
      "solution": "We built a new site from start to finish: a clear list of services and examples of completed valuations, plus a calculator where the client picks the type of property and immediately sees a rough price and turnaround time. We set up the request form so every enquiry lands instantly where you'll definitely see it, in your messaging app, with nothing slipping through. The site opens instantly even on a phone and is set up to be found in search.",
      "results": [
        {
          "value": "in 1 sec",
          "unit": "opens even on a phone"
        },
        {
          "value": "24/7",
          "unit": "the calculator works out the price without you lifting a finger"
        },
        {
          "value": "0",
          "unit": "lost requests — they come straight to your messaging app"
        }
      ],
      "quote": {
        "text": "The site used to just sit there, and now people work out the price themselves and leave requests — they come straight to me and nothing gets lost. The site is finally working for us.",
        "name": "D. V.",
        "role": "head of a property valuation company",
        "placeholder": true
      }
    }
  ]
};

export const featuredIds = ["docs-ai","crypto-desk","practice-saas"];
