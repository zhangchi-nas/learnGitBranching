exports.level = {
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C6\",\"id\":\"main\",\"remoteTrackingBranchID\":\"o/main\"},\"o/main\":{\"target\":\"C1\",\"id\":\"o/main\",\"remoteTrackingBranchID\":null},\"o/bar\":{\"target\":\"C1\",\"id\":\"o/bar\",\"remoteTrackingBranchID\":null},\"foo\":{\"target\":\"C3\",\"id\":\"foo\",\"remoteTrackingBranchID\":null},\"side\":{\"target\":\"C2\",\"id\":\"side\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C4\":{\"parents\":[\"C1\"],\"id\":\"C4\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C5\":{\"parents\":[\"C3\",\"C4\"],\"id\":\"C5\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C6\":{\"parents\":[\"C2\",\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"main\":{\"target\":\"C2\",\"id\":\"main\",\"remoteTrackingBranchID\":null},\"bar\":{\"target\":\"C3\",\"id\":\"bar\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"bar\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git pull origin c3:foo;git pull origin c2:side",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C4\",\"id\":\"main\",\"remoteTrackingBranchID\":\"o/main\"},\"o/main\":{\"target\":\"C1\",\"id\":\"o/main\",\"remoteTrackingBranchID\":null},\"o/bar\":{\"target\":\"C1\",\"id\":\"o/bar\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C4\":{\"parents\":[\"C1\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"main\":{\"target\":\"C2\",\"id\":\"main\",\"remoteTrackingBranchID\":null},\"bar\":{\"target\":\"C3\",\"id\":\"bar\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"bar\",\"id\":\"HEAD\"}}}",
  "name": {
    "en_US": "Pull arguments",
    "zh_CN": "Git pull 的参数",
    "zh_TW": "pull 的參數",
    "es_AR": "Parámetros de pull",
    "es_MX": "Parámetros de pull",
    "es_ES": "Parámetros de pull",
    "pt_BR": "Parâmetros do pull",
    "gl": "Parámetros de pull",
    "de_DE": "Optionen für Pull",
    "ja": "Pullの引数",
    "fr_FR": "Arguments de pull",
    "ro": "Argumente pentru pull",
    "ru_RU": "Аргументы для pull",
    "ko": "pull 인자들",
    "uk": "Аргументи pull",
    "vi": "Tham số pull",
    "sl_SI": "Pull argumenti",
    "pl": "Argumenty pull",
    "it_IT": "Parametri di git pull",
    "tr_TR": "Git pull komutunun parametreleri"
  },
  "hint": {
    "en_US": "Remember that you can create new local branches with fetch/pull arguments",
    "zh_CN": "记住, 你可以通过 fetch/pull 创建本地分支",
    "zh_TW": "記住，你可以透過 fetch 以及 pull 來建立一個新的 local 的 branch",
    "es_AR": "Acordate de que podés crear nuevas ramas locales usando los parámetros de fetch/pull",
    "es_MX": "Recuerda que puedes crear nuevas ramas locales usando los parámetros de fetch/pull",
    "es_ES": "Recuerda que puedes crear nuevas ramas locales usando los parámetros de fetch/pull",
    "pt_BR": "Lembre-se que você pode criar novos ramos locais com parâmetros de fetch/pull",
    "gl": "Lémbrate que podes crear novas ramas locais con parámetros de fetch/pull",
    "de_DE": "Du kannst neue lokale Branches mittels fetch / pull erstellen",
    "ja": "Fetchとpullの引数を利用してローカルで新規ブランチを作成できるのをお忘れなく",
    "fr_FR": "Vous pouvez aussi créer une nouvelle branche locale avec les arguments de fetch/pull",
    "ro": "Amintește-ți că poți crea ramuri locale noi folosind argumentele la fetch/pull",
    "ru_RU": "Напоминаю, что новые ветки можно создавать и с помощью команд fetch/pull",
    "ko": "fetch/pull 과 인자들로 새 로컬 브랜치를 생성할수 있다는것을 기억하세요.",
    "uk": "Пам'ятай, що ти можеш створювати нові гілки, використовуючи fetch/pull з аргументами",
    "vi": "Nhớ rằng, bạn có thể tạo nhánh cục bộ mới với tham số của fetch/pull",
    "sl_SI": "Zapomni si, da lahko ustvariš nove lokalne branche s fetch/pull argumenti.",
    "pl": "Pamiętaj, że za pomocą argumentów fetch/pull możesz tworzyć nowe lokalne gałęzie",
    "it_IT": "Ricorda che puoi creare nuovi rami locali sfruttando fetch/pull + parametri",
    "tr_TR": "Unutma, fetch/pull parametreleri ile yeni yerel dallar oluşturabilirsin"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git pull arguments",
              "",
              "Now that you know pretty much *everything* there is to know about arguments for `git fetch` and `git push`, there's almost really nothing left to cover for git pull :)",
              "",
              "That's because git pull at the end of the day is *really* just shorthand for a fetch followed by merging in whatever was just fetched. You can think of it as running git fetch with the *same* arguments specified and then merging in *where* those commits ended up.",
              "",
              "This applies even when you use crazy-complicated arguments as well. Let's see some examples:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Here are some equivalent commands in git:",
              "",
              "`git pull  origin foo` is equal to:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "And...",
              "",
              "`git pull  origin bar:bugFix` is equal to:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "See? git pull is really just shorthand for fetch + merge, and all git pull cares about is where the commits ended up (the `destination` argument that it figures out during fetch).",
              "",
              "Lets see a demo:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "If we specify the place to fetch, everything happens as before with fetch but we merge in whatever was just fetched."
            ],
            "afterMarkdowns": [
              "See! by specifying `main` we downloaded commits onto `o/main` just as normal. Then we merged `o/main` to our currently checked out location which is *not* the local branch `main`. For this reason it can actually make sense to run git pull multiple times (with the same args) from different locations in order to update multiple branches."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Does it work with source and destination too? You bet! Let's see that:"
            ],
            "afterMarkdowns": [
              "Wow, that's a TON in one command. We created a new branch locally named `foo`, downloaded commits from remote's main onto that branch `foo`, and then merged that branch into our currently checked out branch `bar`. It's over 9000!!!"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok to finish up, attain the state of the goal visualization. You'll need to download some commits, make some new branches, and merge those branches into other branches, but it shouldn't take many commands :P"
            ]
          }
        }
      ]
    },
    "fr_FR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Les arguments de git pull",
              "",
              "Maintenant que vous savez presque *tout* ce qu'il y a à savoir sur les arguments de `git fetch` et `git push`, il n'y a presque plus rien à vous apprendre sur git pull :)",
              "",
              "C'est parce que git pull est en fait *juste* un raccourci pour un fetch suivi d'un merge de tout ce qui vient d'être rapatrié. Vous pouvez vous représenter git pull comme un git fetch avec les *mêmes* arguments, suivi d'un merge qui aura lieu à l'endroit *exact* où ces commits seront arrivés.",
              "",
              "Cela fonctionne même quand vous utilisez des arguments très compliqués. Voyons quelques exemples :"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Voici quelques commandes équivalentes dans Git :",
              "",
              "`git pull origin foo` est équivalent à :",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "Et :",
              "",
              "`git pull origin bar:bugFix` est équivalent à :",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "Vous voyez ? git pull est au fond un simple un raccourci pour fetch + merge, et tout ce qui lui importe est la destination des commits (l'argument `destination` qu'il utilise durant le fetch).",
              "",
              "Voyons une démonstration :"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Si nous précisons l'emplacement à rapatrier tout se passe comme précédemment, avec fetch, mais en sus nous fusionnons tout ce qui a été rapatrié."
            ],
            "afterMarkdowns": [
              "Vu ? En précisant `main` nous avons téléchargé les commits dans `o/main` comme d'habitude. Puis nous avons fusionné `o/main` avec là où nous sommes, *sans nous soucier* de la branche courante."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Cela fonctionne-t-il aussi bien avec une source et une destination ? Et oui ! Voyons cela :"
            ],
            "afterMarkdowns": [
              "Wow, INCROYABLE tout ce que nous avons fait en une commande. Nous avons créé une branche locale nommée `foo`, téléchargé les commits depuis la branche main distante dans `foo`, et ensuite fusionné cette branche dans notre branche actuelle de travail (checkoutée) `bar` !!!"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok, pour finir ce niveau reproduisez l'état de la fenêtre Objectif. Vous aurez besoin de télécharger quelques commits, de créer des branches et de les fusionner dans d'autres branches, mais cela ne devrait pas utiliser trop de commandes :P"
            ]
          }
        }
      ]
    },
    "es_AR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Parámetros de git pull",
              "",
              "Ahora que sabés prácticamente *todo* lo que hay que saber sobre los parámetros de `git fetch` y `git push`, casi que no queda nada para cubrir de git pull :)",
              "",
              "Eso es porque git pull es simplemente un atajo para hacer un fetch seguido de un merge. Podés pensarlo como correr git fetch con los *mismos* parámetros, y después mergear aquello a donde esos commits hayan ido a parar.",
              "",
              "Esto aplica incluso cuando usás parámetros hiper-rebuscados. Veamos algunos ejemplos:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Estos son algunos comandos equivalentes de git:",
              "",
              "`git pull  origin foo` equivale a:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "Y...",
              "",
              "`git pull  origin bar:bugFix` equivale a:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "¿Ves? git pull es simplemente un atajo para un fetch + merge, y todo lo que le importa a git pull es dónde terminaron esos commits (el parámetro `destino` que determina durante el fetch).",
              "",
              "Veamos una demostración:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Si especificamos el lugar del que hacer fetch, todo ocurre como antes, pero sólo mergeamos lo que se fetcheó."
            ],
            "afterMarkdowns": [
              "¡Ves! Especificando `main` bajamos los commits a `o/main` como siempre. Después mergeamos `o/main` a nuestra rama actual, *sin importar* qué había en nuestra copia de trabajo."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "¿Esto funciona con origen y destino, también? ¡Más vale! Veámoslo:"
            ],
            "afterMarkdowns": [
              "Wow, eso es un MONTÓN en un único comando. Creamos una nueva rama local llamada `foo`, descargamos los commits del main del remoto a esta rama `foo`, y después mezclamos esa rama a nuestra rama actual `bar`. ¡¡¡Supera los 9000!!!"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "OK: para terminar, alcanzá el estado del objetivo. Vas a necesitar descargar algunos commits, crear algunas ramas nuevas, y mergear esas ramas junto con otras, pero no debería llevar demasiados comandos :P"
            ]
          }
        }
      ]
    },
    "es_MX": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Parámetros de git pull",
              "",
              "Ahora que sabes prácticamente *todo* lo que hay que saber sobre los parámetros de `git fetch` y `git push`, casi no queda nada por revisar del comando git pull :)",
              "",
              "Eso es porque, al final, git pull es simplemente un atajo para hacer un fetch seguido de un merge. Puedes imaginártelo como ejecutar git fetch con los *mismos* parámetros, y después hacer merge hacia donde esos commits hayan quedado.",
              "",
              "Esto aplica incluso cuando utilizas parámetros absurdamente complicados. Veamos algunos ejemplos:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Estos son algunos comandos equivalentes de git:",
              "",
              "`git pull origin foo` equivale a:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "Y...",
              "",
              "`git pull origin bar:bugFix` equivale a:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "¿Ves? git pull es simplemente un atajo para un fetch + merge, y todo lo que le importa a git pull es dónde terminaron esos commits (el parámetro `destino` que determina durante el fetch).",
              "",
              "Veamos una demostración:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Si especificamos el lugar desde donde hacer fetch, todo ocurre como antes, pero hacemos merge con lo que se obtuvo de fetch."
            ],
            "afterMarkdowns": [
              "¡Ves! Especificando `main` descargamos los commits a `o/main` como siempre. Después hacemos merge de `o/main` a nuestra rama actual, la cual *no* es la rama local `main`. Por este motivo puede hacer sentido ejecutar git pull múltiples ocasiones (con los mismos argumentos) desde diferentes ubicaciones con el fin de actualizar múltiples ramas."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "¿Esto también funciona especificando origen y destino? ¡Puedes apostarlo! Veámoslo:"
            ],
            "afterMarkdowns": [
              "Increible, eso es MUCHISIMO en un único comando. Creamos una nueva rama local llamada `foo`, descargamos los commits del main remoto a la rama `foo`, y después hicimos merge esa rama a nuestra rama actual `bar`. ¡¡¡Su poder es de más de 8000!!!"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "OK, para terminar, intenta alcanzar el estado del objetivo. Vas a necesitar descargar algunos commits, crear algunas ramas nuevas, y hacer merge de esas ramas junto con otras, pero no debería llevarte demasiados comandos :P"
            ]
          }
        }
      ]
    },
    "es_ES": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Parámetros de git pull",
              "",
              "Ahora que sabes prácticamente *todo* lo que hay que saber sobre los parámetros de `git fetch` y `git push`, casi no queda nada por cubrir del comando git pull :)",
              "",
              "Eso es porque git pull es simplemente un atajo para hacer un fetch seguido de un merge. Puedes imaginártelo como ejecutar git fetch con los *mismos* parámetros, y después hacer merge de ello hacia donde esos commits hayan ido a parar.",
              "",
              "Esto aplica incluso cuando utilizas parámetros rebuscados en exceso. Veamos algunos ejemplos:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Estos son algunos comandos equivalentes de git:",
              "",
              "`git pull  origin foo` equivale a:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "Y...",
              "",
              "`git pull  origin bar:bugFix` equivale a:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "¿Ves? git pull es simplemente un atajo para un fetch + merge, y todo lo que le importa a git pull es dónde terminaron esos commits (el parámetro `destino` que determina durante el fetch).",
              "",
              "Veamos una demostración:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Si especificamos el lugar desde donde hacer fetch, todo ocurre como antes, pero sólo mergeamos lo que se fetcheó."
            ],
            "afterMarkdowns": [
              "¡Ves! Especificando `main` descargamos los commits a `o/main` como siempre. Después mergeamos `o/main` a nuestra rama actual, *sin importar* qué había en nuestra copia de trabajo."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "¿Esto funciona con origen y destino, también? ¡Más vale! Veámoslo:"
            ],
            "afterMarkdowns": [
              "Caramba, eso es una BARBARIDAD en un único comando. Creamos una nueva rama local llamada `foo`, descargamos los commits del main del remoto a esta rama `foo`, y después mezclamos esa rama a nuestra rama actual `bar`. ¡¡¡Supera los 9000!!!"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "OK: para terminar, intenta alcanzar el estado del objetivo. Vas a necesitar descargar algunos commits, crear algunas ramas nuevas, y mergear esas ramas junto con otras, pero no debería llevar demasiados comandos :P"
            ]
          }
        }
      ]
    },
    "pt_BR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Parâmetros do git pull",
              "",
              "Agora que você sabe praticamente *tudo* que há para saber sobre parâmetros do `git fetch` e `git push`, não há praticamente nada a se abordar a respeito do  git pull :)",
              "",
              "Isso é porque o git pull no final das contas é *realmente* apenas um atalho para um fetch seguido de um merge em seja lá o que acabou de ser baixado. Você pode pensar nele como rodar o git fetch recebendo os *mesmos* argumentos, seguido de um merge no lugar *onde* esses commits foram parar.",
              "",
              "Isso se aplica mesmo no caso de argumentos loucamente complicados. Vejamos alguns exemplos:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Aqui estão alguns comandos que são equivalente para o Git:",
              "",
              "`git pull  origin foo` é igual a:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "E...",
              "",
              "`git pull  origin bar:bugFix` é igual a:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "Viu? O git pull é realmente um atalho para fetch + merge, e tudo com o que o git pull se importa é com onde os commits foram parar (o parâmetro de `destino` que ele descobre durante o fetch).",
              "",
              "Vejamos uma demonstração:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Se especificarmos o lugar onde fazer o fetch, tudo acontece como antes com o fetch, mas fazemos o merge naquilo que acabou de ser baixado."
            ],
            "afterMarkdowns": [
              "Veja! Especificando `main` nós baixamos commits em `o/main` como sempre. Então fizemos um merge de `o/main` com o lugar onde estamos, *independente* daquilo que está atualmente em checkout."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Isso também funciona com origem e destino especificados? Sim, você acertou! Vejamos:"
            ],
            "afterMarkdowns": [
              "Wow, isso é MUITA coisa em um comando só. Nós criamos um novo ramo local chamado `foo`, baixamos commits do main remoto nesse ramo `foo`, e então fizemos um merge dele com o ramo atualmente em checkout, `bar`."
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok, para terminar, obtenha o estado da visualização do objetivo. Você vai precisar baixar alguns commits, criar novos ramos, e fazer merge de ramos em outros ramos, mas não deve precisar de muitos comandos para isso :P"
            ]
          }
        }
      ]
    },
    "gl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Parámetros de git pull",
              "",
              "Agora que sabes prácticamente *todo* o que hai que saber sobre os parámetros de `git fetch` e `git push`, casi que non queda nada para cubrir os de git pull :D",
              "",
              "Eso é porque git pull é sinxelamente un atallo para facer un fetch seguido dun merge. Podes pensalo como executar git fetch cos *mesmos* parámetros, e logo mesturar aquelo onde esos commits houberan ido ficar.",
              "",
              "Esto aplica incluso cando usas parámetros hiper-complexos. Vexamos algúns exemplos:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Estos son algúns comandos equivalentes de git:",
              "",
              "`git pull  origin foo` equivale a:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "E...",
              "",
              "`git pull  origin bar:bugFix` equivale a:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "¿Ves? git pull é sinxelamente un atallo para un fetch + merge, e todo o que lle importa a git pull é ónde terminaron eses commits (o parámetro `destino` que indícase durante o fetch).",
              "",
              "Vexamos unha demostración:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Se especificamos o lugar do que facer o fetch, todo ocorre coma antes, pero só mesturamos o que se descargou."
            ],
            "afterMarkdowns": [
              "¡Ves! Indicando `main` baixamos os commits á `o/main` coma sempre. Despois mesturamos `o/main` á nosa rama actual, *sen importar* qué tiñamos na nos copia de traballo."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "¿Esto funciona co orixe e o destino, tamén? ¡Máis lle vale! Vexámolo:"
            ],
            "afterMarkdowns": [
              "Wow, eso es unha CHEA nun único comando. Creamos unha nova rama local chamada `foo`, descargamos os commits do main do remoto a esta rama `foo`, e logo mesturamos esa rama á nosa rama actual `bar`. ¡¡¡Supera os 9000!!!"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "OK: para rematar, alcanza o estado do obxectivo. Vase necesitar descargar algúns commits, crear algunhas ramas novas, e mesturar esas ramas xunto con outras, pero non debería levar demasiados domandos :P"
            ]
          }
        }
      ]
    },
    "zh_TW": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## git pull 的參數",
              "",
              "現在你已經知道關於 `git fetch` 以及 `git push` 的*任何參數*，但是我們還可以再聊聊 `git pull`:)",
              "",
              "那是因為 `git pull` 到目前為止*的確*只是表示 fetch 之後再 merge 所 fetch 的 commit，你可以把它想成，當使用 `git fetch` 時使用*一樣*的參數，之後再從 fetch 下來的 commit *所放置*的位置做 merge。",
              "",
              "這同樣也適用於當你指定相當複雜的參數，讓我們來看一些例子："
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "對於 git 來說，有一些意義一樣的指令：",
              "",
              "`git pull  origin foo` 相當於：",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "而且...",
              "",
              "`git pull  origin bar:bugFix` 相當於：",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "看吧？`git pull` 真的就只是表示 fetch 跟 merge 的一個簡化後的指令，而且 `git pull` 所根據的是這些 commit 要放置的位置（在 fetch 的時候所指定的`destination`）。",
              "",
              "讓我們來看一個例子："
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "如果我們在 fetch 的時候有指定`位置`的話，跟之前一樣，fetch 所做的事情沒有變，但是我們會 merge 我們剛剛所 fetch 的該`位置`的commit。"
            ],
            "afterMarkdowns": [
              "看吧！指定位置為 `main`，跟平常一樣，我們下載了 commit 並且放到 `o/main` 上，接著，我們會 merge `o/main` 到我們現在的位置，*不管*我們現在所 checkout 的位置在哪裡。"
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "他是不是也可以同時指定 source 以及 destination？你說對了啦！讓我們來看一下："
            ],
            "afterMarkdowns": [
              "哇！這個指令強而有力，我們在 local 建立了一個新的 `foo` branch，下載了 remote 的 `main` 的 commit，並且放到 local 的 `foo` branch，之後 merge `foo` branch 到我們目前所 checkout 的 `bar` branch。這實在是太超過了！！！"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "要完成這一關，達到視覺化目標的要求，你需要下載一些 commit，建立一些新的 branch，並且 merge 這些 branch 到其他的 branch 上面，這個關卡不需要打太多的指令:P"
            ]
          }
        }
      ]
    },
    "zh_CN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git pull 参数",
              "",
              "既然你已经掌握关于 `git fetch` 和 `git push` 参数的方方面面了，关于 git pull 几乎没有什么可以讲的了 :)",
              "",
              "因为 git pull 到头来就是 fetch 后跟 merge 的缩写。你可以理解为用同样的参数执行 git fetch，然后再 merge 你所抓取到的提交记录。",
              "",
              "还可以和其它更复杂的参数一起使用, 来看一些例子:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "以下命令在 Git 中是等效的:",
              "",
              "`git pull origin foo` 相当于：",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "还有...",
              "",
              "`git pull origin bar:bugFix` 相当于：",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "看到了? git pull 实际上就是 fetch + merge 的缩写, git pull 唯一关注的是提交最终合并到哪里（也就是为 git fetch 所提供的 destination 参数）",
              "",
              "一起来看个例子吧："
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "如果我们指定要抓取的 place，所有的事情都会跟之前一样发生，只是增加了 merge 操作"
            ],
            "afterMarkdowns": [
              "看到了吧! 通过指定 `main` 我们更新了 `o/main`。然后将 `o/main` merge 到我们的所在的分支，**无论**我们当前所在的位置是哪。"
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "pull 也可以用 source:destination 吗? 当然喽, 看看吧:"
            ],
            "afterMarkdowns": [
              " 哇, 这个命令做的事情真多。它先在本地创建了一个叫 `foo` 的分支，从远程仓库中的 main 分支中下载提交记录，并合并到 `foo`，然后再 merge 到我们的当前所在的分支 `bar` 上。操作够多的吧？！"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "好啦, 该结束了！请按照目标窗口中的状态进行操作。你需要下载一些提交，然后创建一些新分支，再合并这些分支到其它分支, 但这用不了几个命令 :P "
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Optionen für Git Pull",
              "",
              "Da du jetzt so ziemlich *alles* kennst, was es an Optionen für `git fetch` und `git push` gibt, ist kaum noch etwas zu Optionen für `git pull` zu sagen. :)",
              "",
              "Das liegt daran, dass `git pull` letztendlich *wirklich* nur eine Abkürzung für `fetch` gefolgt von einem `merge` von dem, was auch immer gerade heruntergeladen wurde, ist. Denk es dir als ein `git fetch` mit denselben Optionen und einem anschließenden Merge.",
              "",
              "Das trifft sogar zu, wenn du völlig abgedrehte Optionen verwendest. Ein paar Beispiele:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Hier sind einige gleichwertige Befehle in Git:",
              "",
              "`git pull origin foo` ist dasselbe wie:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "Und ...",
              "",
              "`git pull origin bar:bugFix` ist dasselbe wie:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "Siehst du? `git pull` ist wirklich nur eine Abkürzung von `fetch` + `merge` und es interessiert sich nur dafür, wo die Commits hin sollen (die \"Ziel\"-Option, die es beim `fetch` auswertet).",
              "",
              "Schauen wir uns eine Demonstration an:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Wenn wir den Ort, auf den das `fetch` ausgeführt werden soll, angeben, passiert alles so wie beim `git fetch`, aber es wird direkt danach auch ein Merge ausgeführt."
            ],
            "afterMarkdowns": [
              "Siehst du? Da wir `main` angegeben haben, sind die Commits in `o/main` heruntergeladen worden. Danach wurde `o/main` gemerged, egal was gerade ausgecheckt war."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Funktioniert das auch wenn man Quelle und Ziel angibt? Aber sicher! Das sehen wir hier:"
            ],
            "afterMarkdowns": [
              "Wow, das ist eine Menge in einem einzelnen Befehl. Wir haben lokal einen neuen Branch namens `foo` erstellt, die Commits vom `main` des Servers dorthin heruntergeladen und ihn danach in unseren aktuell ausgecheckten Branch `bar` gemerged."
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok, um's zu Ende zu bringen versuch das Ziel aus der Zielgrafik zu erreichen. Du wirst einige Commits herunterladen, einige neue Branches anlegen und diese in andere mergen müssen, aber das sollte nicht allzu viele Befehle benötigen. :P"
            ]
          }
        }
      ]
    },
    "ja": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Pullの引数",
              "",
              "`git fetch`と`git pull`の引数について学んできたので、`git pull`について新しく学ばないといけないことは殆ど残っていません！",
              "",
              "なぜなら、実は`git pull`はfetchした後に、fetchしたコミットをマージするための省略形だからです！",
              "",
              "これはとても複雑な引数を与えた場合でも変わりません。いくつか、例を見てみましょう!"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "ここでは同等の働きをするコマンドを紹介します。",
              "",
              "`git pull  origin foo` は次のコマンドと同じ働きをします。",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "他にも...",
              "",
              "`git pull  origin bar:bugFix` は次のコマンドと同じ働きをします。",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "ご覧の通り、`git pull`は単なるfetch + mergeの略語であり、git pullが必要とするのはコミットがどこへ行くのか（fetchにおける`<destination>`）だけなのです。",
              "",
              "デモを見ていきましょう！"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "fetchする場所を指定すると"
            ],
            "afterMarkdowns": [
              "ご覧ください！`main`を指定することで、`o/main`にコミットをダウンロードしてきました。そして`o/main`を現在チェックアウトしている場所にマージしましたが、これはローカルの`main`ブランチではありません。",
              "",
              "このような挙動をするので、複数のブランチを更新するためには異なる場所（かつ同じ引数）で`git pull`を実行しなければいけません。"
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "`<source>`と`<destination>`にも対応しているかですって？",
              "",
              "その通りです。実際に見ていきましょう！"
            ],
            "afterMarkdowns": [
              "ひとつのコマンドで実に大量の操作を行っていますね！",
              "ローカルに`foo`ブランチを作成し、リモート上の`main`から`foo`ブランチにコミットをダウンロードして、そのブランチを今、チェックアウトしている`bar`ブランチにmergeしました！"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "示されているゴールの状態になるように頑張ってください！",
              "",
              "コミットをいくつかfetchして新しいブランチを作成し、それらのブランチを他のブランチにmergeする必要があります。",
              "",
              "しかし、それほど多くのコマンドは必要ありません！"
            ]
          }
        }
      ]
    },
    "ro": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Argumente pentru git pull",
              "",
              "Acum că știi practic *tot* ce este de știut despre argumentele pentru `git fetch` și `git push`, nu mai rămâne aproape nimic de acoperit pentru git pull :)",
              "",
              "Asta pentru că, la sfârșitul zilei, git pull este *cu adevărat* doar o prescurtare pentru un fetch urmat de un merge al ceea ce tocmai a fost fetch-uit. Poți să-l consideri ca și cum ai rula git fetch cu aceleași argumente specificate și apoi să faci merge în locul unde au ajuns acele commit-uri.",
              "",
              "Aceasta se aplică chiar și atunci când folosești argumente foarte complicate. Să vedem câteva exemple:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Iată câteva comenzi echivalente în git:",
              "",
              "`git pull  origin foo` este echivalent cu:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "Și...",
              "",
              "`git pull origin bar:bugFix` e echivalent:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "Vezi? git pull este cu adevărat doar o prescurtare pentru fetch + merge, iar tot ce îi pasă lui git pull este unde au ajuns commit-urile (argumentul `destinatie` pe care îl determină în timpul fetch-ului).",
              "",
              "Să vedem o demonstrație:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Dacă specificăm locul de unde să facem fetch, totul se întâmplă ca înainte cu fetch, dar vom face merge cu ceea ce tocmai am fetch-uit."
            ],
            "afterMarkdowns": [
              "Vezi! Specificând `main`, am descărcat commit-urile în `o/main` ca de obicei. Apoi am făcut merge de `o/main` în locul unde ne aflăm acum, *indiferent* de unde ne aflam."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Funcționează și dacă specificăm `<sursă>` și `<destinație>`? Sigur că da! Să vedem:"
            ],
            "afterMarkdowns": [
              "Wow, o MULȚIME de lucruri într-o singură comandă. Am creat o nouă ramură locală numit `foo`, am descărcat commit-urile de pe `main` de la remote în această ramură `foo`, și apoi am făcut merge acestuia în ramura curentă `bar`."
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok, pentru a termina, încearcă să atingi starea vizualizată în obiectiv. Vei avea nevoie să descarci câteva commit-uri, să creezi câteva ramuri noi și să faci merge unor ramuri în altele, dar nu ar trebui să fie prea multe comenzi :P"
            ]
          }
        }
      ]
    },
    "ru_RU": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Аргументы для pull",
              "",
              "Аргументы для `git pull` не покажутся вам чем-то новым, учитывая, что вы уже знакомы с аргументами для `git fetch` и `git push` :)",
              "",
              "Как мы помним, `git pull` сначала выполняет `git fetch`, а следом сразу `git merge` с той веткой, в которую притянулись обновления командой fetch. Другими словами, это все равно, что выполнить git fetch с теми же аргументами, которые вы указали для pull, а затем выполнить git merge с веткой, указанной в аргументе <приемник> команды pull.",
              "",
              "Рассмотрим на примерах:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Вот примеры абсолютно эквивалентных команд в git:",
              "",
              "`git pull  origin foo` это то же самое, что сделать:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "И еще...",
              "",
              "`git pull  origin bar:bugFix` то же, что:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "Как видно, git pull используется, чтобы за одну команду выполнить fetch + merge.",
              "",
              "Посмотрим демонстрацию:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Здесь сначала выполнится fetch с аргументом указанным к pull, а merge выполняется с теми изменениями, которые будут скачаны командой fetch."
            ],
            "afterMarkdowns": [
              "Как видно, мы указали `main`, поэтому как обычно все обновления притянулись на ветку `o/main`. Затем мы слили (merge) обновленную ветку `o/main` с веткой, на которой мы находимся."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Будет ли это работать, если указать `<источник>` и `<приемник>`? Проверим:"
            ],
            "afterMarkdowns": [
              "Ого, сколько всего выполнено всего одной командой!. Мы создали новую ветку `foo` в локальном репозитории, скачали на неё изменения с ветки `main` удаленного репозитория, а затем слили эту ветку с веткой `bar`, на которой мы находились!"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "В последнем упражнении необходимо привести дерево к аналогичному в примере. Нужно скачать несколько изменений, создать несколько новых веток, слить одни ветки в другие, но постарайтесь использовать как можно меньше команд. Удачи! :P"
            ]
          }
        }
      ]
    },
    "ko": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git pull의 인자들",
              "",
              "`git fetch`와 `git push`의 인자들을 다 알았기 때문에, git pull에서 더 설명할게 사실 없습니다 :)",
              "",
              "git pull은 결국 merge가 따라오는 fetch 그 자체이기 때문이죠. git fetch와 *같은* 인자를 사용하며 커밋들을 *어디*로 merge되는지 알면 됩니다.",
              "",
              "정신나간것마냥-복잡한 인자들도 기본적으로는 똑같다고 보면 됩니다. 예시를 살펴봅시다:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "git에서 다음 명령어들은 같습니다:",
              "",
              "`git pull  origin foo` 는 다음과 같습니다:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "그리고...",
              "",
              "`git pull  origin bar:bugFix` 는 다음과 같습니다:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "보이죠? git pull은 그저 fetch + merge의 축약형일 뿐이에요, 그리고 git pull은 커밋들이 도착하는곳을 신경씁니다(fetch를 하며 지정된 `destination`인자의 위치로 merge가 수행됩니다).",
              "",
              "직접 확인해봅시다:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "place를 지정하면, 이전에 fetch를 하던때와 완전히 똑같이 진행되고 fetch한것을 병합합니다."
            ],
            "afterMarkdowns": [
              "보이죠! `main`를 지정해서 우리는 `o/main`에 평소처럼 커밋들을 내려받았습니다. 그다음 우리가 있는 곳으로 `o/main`를 병합했습니다 현재 체크아웃된 브랜치와 *상관없이* 말이죠"
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "source 와 destination 모두 적용될까요? 추측해보세요! 확인해봅시다:"
            ],
            "afterMarkdowns": [
              "이야, 명령어 하나에 많은게 일어나고있습니다. 로컬에 이름이 `foo`인 새 브랜치를 만들고, 원격 저장소의 main에서 이 브랜치 `foo`에 커밋들을 내려받습니다, 그후 그 브랜치를 우리가 현재 체크아웃한 브랜치 `bar`로 병합했습니다. 오오오!!!"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "좋습니다 마무리하기 위해, 골 시각화와 같은 상태로 만들어 주세요. 커밋을 내려받고, 새 브랜치를 만들고, 그 브랜치들을 다른 브랜치로 병합해야 될겁니다, 하지만 명령어는 그렇게 많이 안써도 되죠 :P"
            ]
          }
        }
      ]
    },
    "uk": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Аргументи git pull",
              "",
              "Зараз, коли ти знаєш майже *все*, що можна знати про аргументи для `git fetch` і `git push`, дійсно майже нема чого розповідати про git pull :)",
              "",
              "Це тому, що git pull, зрештою, *просто* зручне об'єднання fetch і merge. Його можна собі уявляти як git fetch і git merge виконані з *однаковими* аргументами.",
              "",
              "Це працює незалежно від складності переданих аргументів. Розгляньмо:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ось декілька еквівалентних команд git:",
              "",
              "`git pull origin foo` це те саме, що й:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "А...",
              "",
              "`git pull origin bar:bugFix` -- це аналог:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "Бачиш? git pull -- це просто зручне скорочення для fetch + merge. А все, про що дбає git pull -- це те, куди в результаті підуть коміти (а про це йому говорить аргумент `destination`).",
              "",
              "Розгляньмо демонстрацію:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Якщо ми вказуємо місце призначення для fetch, fetch виконується як звичайно, але мердж відбудеться з тим, що ми щойно стягнули"
            ],
            "afterMarkdowns": [
              "От бачиш, вказавши `main`, ми звантажили коміти в `o/main`, як завжди. Потім змерджили `o/main` в поточну гілку."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Чи це працює також при вказанні `source` і `destination`? І не сумнівайся! Ось приклад:"
            ],
            "afterMarkdowns": [
              "Ого, стільки роботи однією командою. Ми створили локальну гілку з назвою `foo`, звантажили в неї коміти з віддаленого main, а потім змерджили `foo` в поточну гілку `bar`!"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Добре, для завершення спробуй досягти стану репозиторію, показаного на візуалізації. Треба буде звантажити відсутні коміти, створити нові гілки і змерджити їх в інші гілки, але не надто великою кількістю команд! :P"
            ]
          }
        }
      ]
    },
    "vi": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Tham số git pull",
              "",
              "Giờ thì bạn đã biết gần như là *tất cả* về tham số của `git fetch` và `git push`, thế thì hầu như chẳng còn gì mới cho git pull cả :)",
              "",
              "Đó và vì nói cho cùng thì git pull *về thực tế* cũng chỉ là lệnh tắt cho tìm nạp và sau đó là hợp nhất những gì vừa mới được nạp. Bạn có thể coi nó như là chạy lệnh git fetch với *cùng* tham số được chỉ định và sau đó hợp nhất các commit vào *nơi* được chỉ định.",
              "",
              "Điều này được áp dụng kể cả khi bạn sử dụng những tham số phức tạp đến độ điên rồ. Hãy xem qua một vài ví dụ:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Dưới đây là một vài câu lệnh tương đồng nhau trong Git:",
              "",
              "`git pull  origin foo` tương đương với:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "Và...",
              "",
              "`git pull  origin bar:bugFix` tương đương với:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "Thấy chứ? git pull thực ra chỉ là lệnh tắt cho fetch + merge, và tất cả những gì git pull quan tâm là nơi mà các commit sẽ tới (tham số `đích` mà nó diễn giải được trong quá trình nạp).",
              "",
              "Hãy xem qua một bản giới thiệu:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Nếu ta chỉ định vị trí để nạp, mọi thứ diễn ra như với git fetch nhưng giờ đây có thêm một bước đó là ta hợp nhất những gì mà ta đã nạp"
            ],
            "afterMarkdowns": [
              "Thấy chứ! Bằng cách chỉ định nhánh `main` ta tải các commit xuống nhánh `o/main` như thường lệ. Sau đó hợp nhất nhánh `o/main` vào nhánh cục bộ mà ta đang đứng, nhánh mà *không phải* nhánh cục bộ `main`. Nhờ vậy mà ta có thể chạy cùng một lệnh git pull (với cùng tham số) nhiều lần ở những vị trí khác nhau để áp dụng cùng cập nhật lên các nhánh khác nhau."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Điều này có hoạt động với đích và nguồn không? Đoán đúng rồi đấy! Cùng xem thử nào:"
            ],
            "afterMarkdowns": [
              "Wao, quá NHIỀU trong một câu lệnh. Ta tạo ra một nhánh cục bộ là `foo`, tải commit xuống từ nhánh từ xa main xuống nhánh `foo` đó, và sau đó hợp nhất commit vào nhánh `bar` mà ta đang đứng. Đủ thứ luôn!!!"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Được rồi, để kết thúc khóa học, hãy đạt đến mục tiêu được mô tả. Bạn sẽ cần tải xuống vài commit, tạo ra vài nhánh mới, và hợp nhất những nhánh đó sang những nhánh khác, nhưng mà đừng dùng nhiều lệnh quá nhé :P"
            ]
          }
        }
      ]
    },
    "sl_SI": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git pull argumenti",
              "",
              "Sedaj, ko veš praktično *vse*, kar je za vedeti o argumentih za `git fetch` in `git push`, ni skoraj ničesar za dodati za `git pull` :)",
              "",
              "To je zato, ker je git pull konec koncev *res* samo bližnjica za fetch, ki mu sledi merge tega, kar smo fetchali. Predstavljaš si ga lahko kot ukaz git fetch z *istimi* podanimi argumenti in merganjem, *kjer* bodo tisti commiti končali.",
              "",
              "To velja tudi takrat, ko uporabiš noro komplicirane argumente. Poglejmo nekaj primerov:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Tu je nekaj ukazov v gitu:",
              "",
              "`git pull  origin foo` je enak:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "In ...",
              "",
              "`git pull  origin bar:bugFix` je enak:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "Vidiš? Git pull je res bližnjica za fetch + merge. Vse kar zanima git pull je, kje bodo commiti končali (`ciljni` argument, ki ga ugotovi med fetchem).",
              "",
              "Poglejmo primer:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Če določimo mesto za fetchanje, se zgodi vse kot prej s fetchem, ampak tudi zmergamo, kar smo pravkar fetchali."
            ],
            "afterMarkdowns": [
              "Vidiš! Z določitvijo `main` smo prenesli commite na `o/main` kot ponavadi. Potem smo zmergali `o/main` v našo trenutno checkoutano lokacijo, ki *ni* lokalni branch `main`. Zaradi tega razloga je morda celo logično, da izvedemo git pull večkrat (z istimi argumenti) iz drugi lokacij, da posodobimo več branchev."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Ali deluje tudi z izvorom in ciljem? Itak! Poglejmo to:"
            ],
            "afterMarkdowns": [
              "Wow, to je pa RES veliko v enem ukazu. Naredili smo nov lokalen branch imenovan `foo`, prenesli commite iz oddaljenega masterja na ta branch `foo` in potem zmergali ta branch v naš trenutno checkoutan branch `bar`. Je več kot 9000!!!"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok, da zaključiš, pridi v stanje iz ciljne vizualizacije. Prenesti boš moral nekaj commitov, narediti nekaj novih branchev in zmergati te branche v druge branche, ampak ne bi smelo zahtevati veliko ukazov. :P"
            ]
          }
        }
      ]
    },
    "pl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Argumenty git pull",
              "",
              "Teraz, kiedy wiesz już właściwie *wszystko*, co można wiedzieć o argumentach `git fetch` oraz `git push`, naprawdę nie zostało już prawie nic do omówienia przy `git pull` :)",
              "",
              "To dlatego, że w zasadzie `git pull` to *naprawdę* tylko skrót polecenia fetch i scalania wszystkiego, co zostało nim pobrane. Możesz to sobie wyobrazić jako uruchomienie `git fetch` z określonymi *tymi samymi* argumentami, a potem scalenie pobranych commitów *tam*, dokąd trafiły.",
              "",
              "I działa to w ten sposób, nawet jeśli określisz kompletnie szalone argumenty. Zobaczmy kilka przykładów:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Oto kilka równoważnych poleceń w Gicie:",
              "",
              "`git pull  origin foo` nie różni się od:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "A...",
              "",
              "`git pull  origin bar:bugFix` daje taki sam efekt jak:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "Widzisz? Polecenie `git pull` to naprawdę tylko skrót dla fetch + merge i jedyne, co się liczy dla `git pull`, to gdzie trafią commity (argument `celu`, który Git zinterpretuje sobie, wykonując fetch).",
              "",
              "Zobaczmy demo:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Jeśli określimy dla fetch miejsce, to wszystko potoczy się tak jak wcześniej, ale scalimy wszystko, co zostało pobrane przez fetch."
            ],
            "afterMarkdowns": [
              "Zobacz! Określając `main`, pobraliśmy commity do `o/main` tak jak zawsze. Potem scaliliśmy `o/main` z aktualnie wybranym miejscem, którym *nie* jest lokalna gałąź `main`. Właśnie z tego powodu może mieć sens wykonanie git pull wiele razy (z tymi samymi argumentami) z różnych lokalizacji, aby zaktualizować wiele gałęzi."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Czy w przypadku źródła i celu będzie tak samo? Jasne, że tak! Zobaczmy:"
            ],
            "afterMarkdowns": [
              "No nieźle, jedno polecenie, a tyle się dzieje. Stworzyliśmy nową lokalną gałąź `foo`, pobraliśmy commity ze zdalnej gałęzi `main` do `foo`, a potem jeszcze scaliliśmy ją z aktualnie wybraną gałęzią `bar`. Grubo ponad osiem tysięcy!"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Oki, żeby ukończyć poziom, doprowadź drzewo do takiego stanu jak na wizualizacji. Musisz pobrać parę commitów, stworzyć kilka gałęzi i scalić je z innymi, ale nie powinno to wymagać zbyt wielu poleceń :P"
            ]
          }
        }
      ]
    },
    "it_IT": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Parametri di git pull",
              "",
              "Ora che conosci praticamente *tutto* quello che c'è da sapere sui parametri per `git fetch` e `git push`, non è rimasto quasi nulla di cui parlare per git pull :)",
              "",
              "Questo perché git pull alla fine non è altro che una scorciatoia per un fetch seguito dalla fusione verso ciò che è stato appena recuperato. Puoi vederlo come eseguire git fetch con gli *stessi* parametri specificati e poi eseguire una fusione *dove* i commit reucperati sono finiti.",
              "",
              "Ciò è valido anche quando vengono usati dei parametri incredibilmente complessi. Vediamo qualche esempio:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ecco alcuni comandi equivalenti in git:",
              "",
              "`git pull  origin foo` è equivalente a:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "E...",
              "",
              "`git pull  origin bar:bugFix` è equivalente a:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "Visto? git pull non è altro che una scorciatoia per fetch + merge, e l'unica cosa che interessa a quel comando è la posizione d'arrivo dei commit (il parametro `destination` specificato durante il fetch).",
              "",
              "Vediamo una demo:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Se specifichiamo il luogo da cui vogliamo recuperare i dati, l'unico cambiamento rispetto alla lezione precedente consiste nella fusione con ciò che è stato appena recuperato."
            ],
            "afterMarkdowns": [
              "Visto! specificando `main` abbiamo scaricato i commit sul ramo `o/main` come sempre. Poi abbiamo fuso `o/main` con il ramo sul quale stavamo lavorando attualmente, il quale *non* è il ramo `main` locale. Per questo motivo può avere effettivamente senso eseguire più volte git pull (con gli stessi parametri) da posizioni differenti per aggiornare così più rami."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Funziona anche con source e destination? Ci puoi scommettere! Vediamolo all'opera:"
            ],
            "afterMarkdowns": [
              "Wow, è tantissimo per un comando solo! Abbiamo creato un nuovo ramo locale chiamato `foo`, scaricato i commit dal main remoto sul nuovo ramo `foo`, e poi fuso quel ramo con `bar`, quello sul quale stavamo lavorando attualmente. È oltre gli 8000!!!"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok per concludere, raggiungi lo stato mostrato nella finestra dell'obiettivo. Dovrai scaricare alcuni commit, creare alcuni rami, e fondere quei rami in altri rami, ma senza usare troppi comandi :P"
            ]
          }
        }
      ]
    },
    "tr_TR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git pull argümanları",
              "",
              "Artık `git fetch` ve `git push` için argümanlarla ilgili bilmeniz gereken hemen hemen *her şey* öğrendiniz, geriye neredeyse hiçbir şey kalmadı :)",
              "",
              "Çünkü git pull, nihayetinde *gerçekten* sadece bir fetch ve ardından alınan değişikliklerin birleştirilmesi için kullanılan kısa bir komuttur. Bunu, `git fetch` komutunu *aynı* argümanlarla çalıştırmak ve sonra bu commitlerin nereye yerleştiğine bakarak birleştirmek gibi düşünebilirsiniz.",
              "",
              "Bu, karmaşık argümanlar kullansanız bile geçerlidir. İşte bazı örnekler:"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "İşte git'teki bazı eşdeğer komutlar:",
              "",
              "`git pull origin foo` şu komutla eşdeğerdir:",
              "",
              "`git fetch origin foo; git merge o/foo`",
              "",
              "Ve...",
              "",
              "`git pull origin bar:bugFix` şu komutla eşdeğerdir:",
              "",
              "`git fetch origin bar:bugFix; git merge bugFix`",
              "",
              "Görüyorsunuz değil mi? git pull aslında fetch + merge komutlarının kısaltmasıdır ve git pull yalnızca commitlerin nereye yerleştiğiyle ilgilenir (fetch sırasında bulduğu `destination` argümanı).",
              "",
              "Şimdi bir demo yapalım:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Eğer fetch edilecek yeri belirtirsek, her şey daha önce fetch ile olduğu gibi gerçekleşir, ancak yeni alınan değişiklikleri birleştiririz."
            ],
            "afterMarkdowns": [
              "Görüyorsunuz! `main`'i belirterek `o/main` üzerindeki commitleri normal şekilde indirdik. Sonra `o/main`'i şu anda üzerinde çalıştığımız konumla birleştirdik, bu da *yerel main branşı* değil. Bu nedenle aslında git pull'ü farklı konumlardan (aynı argümanlarla) birden fazla kez çalıştırmak, birden fazla branşı güncellemek için mantıklı olabilir."
            ],
            "command": "git pull origin main",
            "beforeCommand": "git clone; go -b bar; git commit; git fakeTeamwork"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Peki ya kaynak ve hedef ile de çalışıyor mu? Kesinlikle! Bunu görelim:"
            ],
            "afterMarkdowns": [
              "Vay, bu bir komutta tonlarca şey oldu. Yerel olarak `foo` adında yeni bir branch oluşturduk, uzak depodaki `main`'den commitleri bu `foo` branch'ine indirdik ve sonra bu branch'i şu anda üzerinde çalıştığımız `bar` branch'ine birleştirdik. Bu gerçekten 9000'in üzerinde!!!"
            ],
            "command": "git pull origin main:foo",
            "beforeCommand": "git clone; git fakeTeamwork; go -b bar; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Tamam, bitirmek için hedef görselleştirmesinin durumuna ulaşın. Bazı commitleri indirmeniz, yeni branşlar oluşturmanız ve bu branşları diğer branşlara birleştirmeniz gerekecek, ancak bu çok fazla komut almaz :P"
            ]
          }
        }
      ]
    }
  }
};