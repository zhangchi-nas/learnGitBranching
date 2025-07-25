exports.level = {
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C5\",\"id\":\"main\",\"remoteTrackingBranchID\":\"o/main\",\"localBranchesThatTrackThis\":null},\"o/main\":{\"target\":\"C3\",\"id\":\"o/main\",\"remoteTrackingBranchID\":null,\"localBranchesThatTrackThis\":[\"main\"]}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C4\":{\"parents\":[\"C1\"],\"id\":\"C4\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C5\":{\"parents\":[\"C3\",\"C4\"],\"id\":\"C5\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"main\":{\"target\":\"C3\",\"id\":\"main\",\"remoteTrackingBranchID\":null,\"localBranchesThatTrackThis\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git clone;git fakeTeamwork 2;git commit ;git pull",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\",\"remoteTrackingBranchID\":null,\"localBranchesThatTrackThis\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "name": {
    "en_US": "Faking Teamwork",
    "fr_FR": "Simulation du travail d'équipe",
    "de_DE": "Teamarbeit simulieren",
    "ja": "擬似的なチーム作業",
    "es_AR": "Simulando el trabajo en equipo",
    "es_ES": "Simulando el trabajo en equipo",
    "es_MX": "Simulando el trabajo en equipo",
    "pt_BR": "Simulando trabalho em equipe",
    "gl": "Simulando o traballo no repositorio",
    "zh_CN": "模拟团队合作",
    "zh_TW": "模擬團隊合作",
    "ro": "Simularea colaborării în echipă",
    "ru_RU": "Коллективная работа",
    "uk": "Симуляція колективної роботи",
    "ko": "가짜 팀워크",
    "vi": "Giả lập làm việc nhóm",
    "sl_SI": "Lažno Ekipno Delo",
    "pl": "Symulacja pracy zespołowej",
    "it_IT": "Simulare il lavoro di squadra",
    "tr_TR": "Takım Çalışması Simülasyonu"
  },
  "hint": {
    "en_US": "Remember you can specify the number of commits to fake",
    "fr_FR": "Rappelez-vous que vous pouvez spécifier le nombre de commits à simuler",
    "de_DE": "Nicht vergessen, du kannst angeben wie viele Commits simuliert werden sollen.",
    "ja": "擬似的に作成するコミット数を指定できるのをお忘れなく",
    "es_AR": "Acordate que podés especificar cuántos commits simular",
    "es_ES": "Recuerda que puedes especificar cuántos commits simular",
    "es_MX": "Recuerda que puedes especificar cuántos commits simular",
    "pt_BR": "Lembre-se que você pode especificar quantos commits quer simular",
    "gl": "Lembra que podes especifar cantos commits queres simular",
    "zh_CN": "记住你可以指定仿真提交的个数",
    "zh_TW": "你要記得指定要送多少個 commit 出去",
    "ro": "Amintește-ți că poți specifica numărul de commit-uri simulate",
    "ru_RU": "помните, Вы можете указать количество фейковых коммитов",
    "uk": "пам’ятай що ти можеш вказати кількість фейкових комітів",
    "ko": "가장할 커밋의 갯수를 조절할 수 있습니다.",
    "vi": "Nhớ rằng bạn có thể chỉ định số lượng commit để giả lập",
    "sl_SI": "Spomni se, da lahko določiš število lažnih commitov.",
    "pl": "Pamiętaj, że możesz określić liczbę symulowanych commitów",
    "it_IT": "Tieni a mente che puoi specificare il numero di commit da simulare",
    "tr_TR": "Kaç commit oluşturulacağını belirtebileceğinizi unutmayın"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Simulating collaboration",
              "",
              "So here is the tricky thing -- for some of these upcoming lessons, we need to teach you how to pull down changes that were introduced in the remote.",
              "",
              "That means we need to essentially \"pretend\" that the remote was updated by one of your coworkers / friends / collaborators, sometimes on a specific branch or a certain number of commits.",
              "",
              "In order to do this, we introduced the aptly-named command `git fakeTeamwork`! It's pretty self explanatory, let's see a demo..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "The default behavior of `fakeTeamwork` is to simply plop down a commit on main."
            ],
            "afterMarkdowns": [
              "There we go -- the remote was updated with a new commit, and we haven't downloaded that commit yet because we haven't run `git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "You can also specify the number of commits or the branch by appending them to the command."
            ],
            "afterMarkdowns": [
              "With one command we simulated a teammate pushing three commits to the `foo` branch on our remote."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "The upcoming levels are going to be pretty difficult, so we're asking more of you for this level.",
              "",
              "Go ahead and make a remote (with `git clone`), fake some changes on that remote, add a local commit, and then pull down the remote changes and merge them. It's like a few lessons in one!"
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
              "## Simuler la collaboration",
              "",
              "C'est là que cela devient compliqué : pour certaines des leçons à venir, nous avons besoin de vous enseigner comment récupérer les changements effectués sur le dépôt distant.",
              "",
              "Cela signifie que nous devons faire semblant que le dépôt distant a été modifié par un collègue / ami / collaborateur, et parfois même sur une branche spécifique ou avec plusieurs commits.",
              "",
              "Pour faire cela, nous introduisons à point nommé la commande `git fakeTeamwork` ! Elle devrait vous paraître assez intuitive, voyons une démo..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Le comportement par défaut de `fakeTeamwork` est tout simplement de faire apparaître un commit sur le main distant :"
            ],
            "afterMarkdowns": [
              "Voilà : le dépôt distant a été mis à jour avec un nouveau commit, et nous n'avons pas encore téléchargé ce commit parce que nous n'avons pas exécuté la commande `git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Vous pouvez aussi spécifier le nombre de commits ou la branche en les ajoutant à la fin de la commande."
            ],
            "afterMarkdowns": [
              "Avec une seule commande, nous avons simulé un collègue ayant pushé 3 commits sur la branche `foo` de notre dépôt distant."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Les niveaux suivants vont devenir assez difficiles, nous augmentons donc un peu la difficulté de cet exercice.",
              "",
              "Vous devrez créer un dépôt distant (avec `git clone`), simuler quelques changements sur ce dépôt, commiter les vôtres, et enfin appliquer les changements distants dans votre dépôt local (pull). C'est presque plusieurs leçons en une !"
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
              "## Simulando la colaboración",
              "",
              "Entonces, hay algo medio tramposo acá -- para algunas de las lecciones siguientes, necesitamos explicarte cómo bajar cambios introducidos en el repositorio remoto.",
              "",
              "Eso significa que esencialmente tenemos que \"hacer de cuenta\" que el repositorio remoto fue actualizado por algún colega, amigo o colaborador tuyo, incluso a veces en alguna rama específica o una cantidad determinada de commits.",
              "",
              "Para lograr esto, introdujimos el bien llamado comando ¡`git fakeTeamwork`! Es bastante auto-explicativo: simula trabajo de nuestros colegas. Veamos una demo..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "El comportamiento por default de `fakeTeamwork` es simplemente crear un commit en main."
            ],
            "afterMarkdowns": [
              "Ahí está: el remoto se actualizó con un nuevo commit, y todavía no nos bajamos ese commit porque aún no hicimos `git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "También podés especificar la cantidad de commits o la ramma agregándolos al comando."
            ],
            "afterMarkdowns": [
              "Con un único comando simulamos que un compañero de equipo pusheó tres commits a la rama `foo` de nuestro remoto."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Los niveles siguientes van a ser algo difíciles, así que vamos a exigirte un poco más en este nivel.",
              "",
              "Animate y creá un remoto (con `git clone`), simulá algunos cambios en ese remoto, commiteá en tu repo local, y luego pulleate esos cambios. ¡Es como varias lecciones en una!"
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
              "## Simulando la colaboración",
              "",
              "Entonces, hay algo un poco tramposo -- para algunas de las lecciones siguientes, necesitamos explicarte cómo descargar cambios introducidos en el repositorio remoto.",
              "",
              "Eso significa que esencialmente tenemos que \"tener en cuenta\" que el repositorio remoto fue actualizado por algún colega, amigo o colaborador tuyo, incluso a veces en alguna rama específica o una cantidad determinada de commits.",
              "",
              "Para lograr esto, introdujimos el bien llamado comando ¡`git fakeTeamwork`! Es bastante autoexplicativo: simula trabajo de nuestros colegas. Veamos una demo..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "El comportamiento por default de `fakeTeamwork` es simplemente crear un commit en main."
            ],
            "afterMarkdowns": [
              "Ahí está: el remoto se actualizó con un nuevo commit, y todavía no nos bajamos ese commit porque aún no hicimos `git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "También puedes especificar la cantidad de commits o la rama agregándolos al comando."
            ],
            "afterMarkdowns": [
              "Con un único comando simulamos que un compañero de equipo pusheó tres commits a la rama `foo` de nuestro remoto."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Los niveles siguientes van a ser algo difíciles, así que vamos a exigirte un poco más en este nivel.",
              "",
              "Anímate y crea un remoto (con `git clone`), simula algunos cambios en ese remoto, haz commit en tu repo local, y luego haz pull de esos cambios. ¡Es como si fueran varias lecciones en una!"
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
              "## Simulando la colaboración",
              "",
              "Aquí está lo complicado -- para alguna de las siguientes lecciones, necesitamos enseeñarte como descargar los cambios que fueron introducidos en remoto",
              "",
              "Eso significa que necesitamos esencialmente \"pretender\" que el remoto fue actualizado por uno de tus compañeros / amigos / colaboradores, a veces en una rama específica o un cierto numero de commits ",
              "",
              "Para hacer esto, hemos introducido el acertadamente llamado ¡`git fakeTeamwork`! Esto bastante autoexplicativo, veamos una demostración."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "El comportamiento predeterminado de `fakeTeamwork` simplemente es crear un commit dentro de la rama de main."
            ],
            "afterMarkdowns": [
              "Aquí vamos -- El remoto fue actualizado con un nuevo commit, y no a sido descargado aún ese commit debido a que no se a corrido `git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "También puedes especificar el número de commits o la rama para añadirlo en el comando."
            ],
            "afterMarkdowns": [
              "Con un comando simulamos a un compañero de equipo creando 3 commits a la rama `foo` en nuestro remoto."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Los siguientes niveles serán bastante dificiles, pedimos más de ti para este nivel.",
              "",
              "Vamos adelante y crea un remoto (con `git clone`) simula algunos cambios en ese remoto, commit tú mismo, y después descarga esos cambios. ¡Es como algunas lecciones en una!"
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
              "## Simulando colaboração",
              "",
              "Neste ponto, temos uma pequena dificuldade -- para algumas das lições a seguir, precisaremos ensinar como fazer pull de mudanças que foram introduzidas no repositório remoto.",
              "",
              "Isso significa que precisaremos essencialmente \"fingir\" que o repositório remoto foi atualizado por algum de seus colegas / amigos / colaboradores, algumas vezes em um ramo específico ou com um certo número de commits.",
              "",
              "Para esta finalidade, criamos o comando fictício `git fakeTeamwork`! Ele é bastante auto-explicativo, vejamos uma demonstração..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "O comportamento padrão do `fakeTeamwork` é simplesmente fazer aparecer um commit no main."
            ],
            "afterMarkdowns": [
              "Aqui vamos nos -- o repositório remoto foi atualizado com um novo commit, e ainda não baixamos esse commit porque não executamos um `git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Você também pode especificar o número de commits ou o ramo, anexando-os ao comando."
            ],
            "afterMarkdowns": [
              "Com um único comando, nós simulamos um colega enviando 3 commits para o ramo `foo` do repositório remoto."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Os níveis posteriores serão mais difíceis, então estamos pedindo um pouco mais de você neste nível.",
              "",
              "Vá em frente e crie um repositório remoto (chamando `git clone`), simule algumas mudanças no repositório remoto, commite no repositório local, e então faça um pull das mudanças que haviam sido simuladas. É como se fossem várias lições em uma só!"
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
              "## Simulando o traballo no repositorio",
              "",
              "Entón, hai algo con trampa aquí -- para algunhas das leccións  seguintes, precisamos explicarche cómo baixar os cambios introducidos no repositorio remoto.",
              "",
              "Eso significa que esencialmente temos que \"finxir\" que o repositorio remoto foi actualizado por algún compañeiro, amigo ou  incluso nalgunha rama específica a cantidade de commits feitos.",
              "",
              "Para acadar esto, introduxemos o ben chamado comando `git fakeTeamwork`! É bastante auto-explicativo: semella traballo dos nosos colegas. Vexamos una demo..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "O comportamento por defecto de `fakeTeamwork` é simplemente crear un commit en main na rama remota."
            ],
            "afterMarkdowns": [
              "Ahí o tes: a rama remota actualizouse cun novo commit, e aínda non nos baixamos ese commit porque inda non fixemos `git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Tamén podes especificar a cantidad de commits ou a rama agregándoos ó comando."
            ],
            "afterMarkdowns": [
              "Cun único comando simulamos que un colega do equipo empurrou tres commits á rama `foo` do noso remoto."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Os niveis seguintes van ser un pouco máis complicados, así que imos a esixirte un pouco máis neste nivel.",
              "",
              "Anímate e crea unha rama remota (con `git clone`), e simula algúns cambios no repositorio remoto, logo desto, fai commit do teu repo local, e logo descarga os cambios. ¡É coma varias leccións nunha soa!"
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
              "## 模擬合作",
              "",
              "接下來的課程有一個很難的事情，我們需要讓你學會如何 pull remote 上的更新。",
              "",
              "這就表示我們必須要 \"假裝\" remote 被你其中一個同事/ 朋友/ 合作的人在某個特定的 branch 上面送了一些特定的 commit。",
              "",
              "為了要做到這件事情,我們要介紹一個自己設計的指令 `git fakeTeamwork`！ 從字面上就可以很容易地看出來它在幹嘛，讓我們來看一個範例..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "`fakeTeamwork` 的預設行為是在送一個 commit 給 main 分支"
            ],
            "afterMarkdowns": [
              "我就說吧！remote 已經藉由一個新的 commit 而更新了，而且因為我們還沒有用 `git fetch`，所以表示我們還沒有下載該 commit。"
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "你可以在命令的後面指定你要送幾個 commit 或是要送給哪個 branch。"
            ],
            "afterMarkdowns": [
              "我們利用一個指令將三個 commit 送給在 remote 上面的 `foo` branch。"
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "接下來的關卡會很困難，所以我們在這個關卡中會問你更多問題。",
              "",
              "現在先把 remote 下載下來（利用 `git clone`），假裝送幾個 commit 給 remote 做更新，然後 pull 這些 commit 下來 。這就好像是幾個教學中的指令的總結！"
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
              "## 模拟团队合作",
              "",
              "这里有一件棘手的事 —— 为了接下来的课程, 我们需要先教你如何制造远程仓库的变更。",
              "",
              "这意味着，我们需要“假装”你的同事、朋友、合作伙伴更新了远程仓库，有可能是某个特定的分支，或是几个提交记录。",
              "",
              "为了做到这点，我们引入一个自造命令 `git fakeTeamwork`！它的名称已经说明了一切，先看演示.."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "`fakeTeamwork` 默认操作就是在远程仓库的 main 分支上做一次提交。"
            ],
            "afterMarkdowns": [
              "完成了 —— 远程仓库增加了一个新提交，我们还没有下载它，因为我们还没有执行 `git fetch`。"
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "你还可以指定提交的分支或是数量，只需要在命令后加上它们就可以了。"
            ],
            "afterMarkdowns": [
              "通过一个命令，我们就模拟队友推送了 3 个提交记录到远程仓库的 foo 分支。"
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "接下来的关卡会相当的困难，所以在本关会让你做许多事情，先来热热身。",
              "",
              "克隆一个远程仓库（用 `git clone`），再在刚创建的远程仓库中模拟一些修改，然后在你自己的本地分支上做一些提交，再拉取远程仓库的变更。这看起来像是包含了好几节的课程。"
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
              "## Zusammenarbeit simulieren",
              "",
              "Hier ist das Problem -- für einige der folgenden Level müssen wir lernen, wie man Änderungen vom entfernten Server holt.",
              "",
              "Das heißt wir müssen im Grunde \"so tun\", als ob der Server von einem Kollegen / Freund / Mitarbeiter aktualisiert worden wäre, manchmal ein bestimmter Branch oder eine bestimmte Anzahl von Commits.",
              "",
              "Um das zu tun führen wir den passend benannten Befehl `git fakeTeamwork` ein! Er ist ziemlich selbsterklärend, schauen wir uns ihn an ..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Das normale Verhalten von `fakeTeamwork` ist es, einen Commit auf den entfernten `main` zu machen."
            ],
            "afterMarkdowns": [
              "Da haben wir's -- der Server ist mit einem neuen Commit aktualisiert worden und wir haben ihn noch nicht lokal, weil wir weder `git fetch` noch `git pull` ausgeführt haben."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Du kannst auch angeben wie viele Commits oder auf welchem Branch sie gemacht werden sollen, indem du das an den Befehl anhängst."
            ],
            "afterMarkdowns": [
              "Mit einem Befehlt haben wir simuliert, dass ein Kollege drei Commits auf den  Branch `foo` gepackt hat."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Die kommenden Level werden recht anspruchsvoll, daher verlangen wir auch in diesem Level schon etwas mehr.",
              "",
              "Leg los und erstelle ein Remote (mit `git clone`), simuliere ein paar Änderungen auf dem Server, committe lokal und dann zieh dir die Änderungen vom Server. Das ist wie mehrere Level in einem!"
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
              "## Simularea colaborării",
              "",
              "Aici este partea complicată -- pentru unele dintre lecțiile următoare, trebuie să învățăm cum să preluăm (tragem) modificările introduse în remote.",
              "",
              "Asta înseamnă că trebuie să \"pretindem\" că remote-ul a fost actualizat de unul dintre colegii / prietenii / colaboratorii tăi, uneori pe o anumită ramură sau cu un anumit număr de commit-uri.",
              "",
              "Pentru a face asta, am introdus comanda cu numele potrivit `git fakeTeamwork`! Este destul de explicită, să vedem o demonstrație..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Comportamentul implicit al comenzii `fakeTeamwork` este să adauge un commit pe ramura main."
            ],
            "afterMarkdowns": [
              "Iată-ne -- remote-ul a fost actualizat cu un nou commit, iar noi nu am descărcat încă acel commit pentru că nu am rulat `git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "De asemenea, poți specifica numărul de commit-uri sau ramura adăugându-le la comandă."
            ],
            "afterMarkdowns": [
              "Cu o singură comandă am simulat că un coleg a partajat trei commit-uri pe ramura `foo` a remote-ului nostru."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Următoarele niveluri vor fi destul de dificile, așa că  cerem mai multe de la tine în acest nivel.",
              "",
              "Astfel, încearcă să creezi un remote (cu `git clone`), să simulezi câteva modificări pe acel remote, să faci un commit local și apoi să descarci modificările de la remote și să le îmbini local la tine. Este ca și cum ar fi câteva lecții într-una singură!"
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
              "## Симуляция совместной работы",
              "",
              "В данном уроке мы находимся в немного затруднительном положении - для выполнения ряда упражнений нам нужно обучить вас скачивать наработки и изменения, которые были сделаны в удалённом репозитории.",
              "",
              "Это означает, что нам следует \"сделать вид\", как будто мы знаем о том, что наш удалённый репозиторий, с которым мы работаем, был изменён одним из ваших коллег / друзей / единомышленников. Это может быть какая-то ветка, либо же какой-то конкретный коммит.",
              "",
              "Для того, чтобы добиться своих целей, нам предоставляется команда со звучным именем `git fakeTeamwork`! Имя команды однозначно даёт понять, что она выполняет. Давайте ознакомимся с демо..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Поведение команды `fakeTeamwork` по умолчанию заключается в том, чтобы просто \"инициировать\" коммит на main-е"
            ],
            "afterMarkdowns": [
              "Ну вот - удалённый репозиторий был изменён при помощи добавления нового коммита, и мы ещё не скачали этот коммит, потому что не запустили команду `git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "В данной команде вам доступна возможность указать ветку и количество добавляемых коммитов"
            ],
            "afterMarkdowns": [
              "С помощью одной лишь команды мы симулируем добавление трёх коммитов в ветку `foo` на удалённом репозитории"
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Последующие уровни будут довольно сложными, поэтому в этом упражнении от вас больше ничего не требуется.",
              "",
              "Вперёд! Склонируйте удалённый репозиторий (с помощью `git clone`), симулируйте любые изменения на этом удалённом репозитории, сделайте какие-нибудь свои коммиты и затем скачайте \"чужие\" изменения. Это выглядит как несколько уроков в одном!"
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
              "## 連携のシミュレーション",
              "",
              "ここでは少し奇怪なものを取り扱います -- これは次回以降の幾つかのレッスンのためのもので、リモートセクションで変更点の反映方法を教えるのに必要なものです。",
              "",
              "つまり、私たちには時にはリモートの特定のブランチや特定の数のコミットを、同僚/友人/共同開発者の一人が更新した「ふりをする」ことが必要だというわけです。",
              "",
              "これを行うために、私たちは適切に選んだ名前のコマンド`git fakeTeamwork`を導入しました！とても明白でしょう？では、デモを見てみましょう。",
              "",
              "*注：もちろん、本当のgit上にこのようなコマンドは存在しません！変更は、「実在する」同僚や友人が行ってくれるでしょうから！ここではレッスンのために「擬似的に」導入しているにすぎません！*"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "`fakeTeamwork`のデフォルトの動作は、単にmainの上にコミットを乗っけるだけです"
            ],
            "afterMarkdowns": [
              "ではいってみましょう -- リモートには新しいコミットが更新され、それはまだ私たちの手元にはダウンロードされていません。なぜなら、`git fetch`を走らせていませんからね。"
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "さらに特定の数のコミット、または追加するブランチをコマンドで指定することもできます。"
            ],
            "afterMarkdowns": [
              "一つのコマンドで、チームメイトが3個のコミットをリモートの`foo`ブランチにプッシュするという動作を再現することができました。"
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "今後のレベルはどんどん難しくなっていくでしょうから、このレベルでも私たちはあなたに少々多くのことを求めます。",
              "",
              "先に行くには、リモートを作り（`git clone`で）、リモートに幾つかの変更を再現して、自身のリポジトリにコミットし、変更を取り込む必要があります。これは、このリモートのセクションでやった幾つかのレッスンの内容と似ていますね！"
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
              "## Симулюємо співпрацю",
              "",
              "Зараз ми знаходимося в незручному становищі -- в деяких із наступних уроків нам потрібно буде пояснити як витягнути зміни з віддаленого репозиторію, що були туди додані іншим учасником.",
              "",
              "Це означає, що нам треба \"вдавати\", що віддалений репозиторій був модифікований твоїм колегою / друзями / небайдужими, іноді на специфічній гілці чи коміті.",
              "",
              "Щоб зробити це, ми додали влучно названу команду `git fakeTeamwork` (симуляціяКолективноїРоботи)! Насправді, з симуляцією колективної роботи стикався мабуть кожен, хто працював в колективі, тож перейдімо до прикладів..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "За замовчуванням `fakeTeamwork` просто додасть коміт в гілку `main`."
            ],
            "afterMarkdowns": [
              "Є -- до віддаленого репозиторію додався ще один коміт, проте ми ще його не звантажили, оскільки ще не виконали `git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Ти також можеш вказати кількість комітів чи гілку, в яку потрібно додати коміти."
            ],
            "afterMarkdowns": [
              "Виконавши одну команду ми симулювали колегу, що запушив три коміти в гілку `foo` на віддаленому репозиторії."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Наступні рівні будуть доволі складними, тому, щоб підготуватись, на цьому рівні теж доведеться не солодко.",
              "",
              "Створи віддалений репозиторій (за допомогою `git clone`), зроби кілька фіктивних змін, зроби кілька комітів локально, й підвантаж віддалені зміни. Це як кілька уроків в одному!"
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
              "## 협동 가장하기",
              "",
              "조금 곤란한일이 생겨버렸습니다 -- 앞으로 배울 레슨들에서 원격 저장소에서 일어난 변경들을 어떻게 로컬로 가져올것인지에 대해 배워 볼것입입니다.",
              "",
              "그런데 여기서 우리는 불가피하게 그 _변경_들을 만들어야 되는데, 원격 저장소가 동료 / 친구 / 협력자등에 의해 특정 브랜치나 여러개의 커밋이 갱신되는 경우를 표현할 필요가 있습니다. 즉 우리는 팀워크를 \"가장\"할 필요가 있는것 입니다.",
              "",
              "이런 문제를 해결하기 위해서 `git fakeTeamwork` 명령을 만들었습니다! 이름이 참 적절하죠? 예시를 통해 확인해봅시다..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "`fakeTeamwork`의 기본 행동은 원격 main에 간단히 하나의 커밋을 하는것 입니다."
            ],
            "afterMarkdowns": [
              "자, 됐습니다 -- 원격 저장소에 새로운 커밋이 갱신되었습니다. 아직 `git fetch`를 하지 않았기 때문에 로컬로 내려받아지지는 않았습니다."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "명령어에 추가할 커밋의 갯수나 어떤 브랜치에 추가할지 지정하는것도 가능합니다. 다음과 같이 명령어 뒤에 추가하면 됩니다."
            ],
            "afterMarkdowns": [
              "하나의 명령어로 팀원이 원격저장소의 `foo` 브랜치에 세개의 커밋을 push한것처럼 가장했습니다."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "뒤의 레벨들이 조금 어렵기 때문에, 이번 레벨에서 여러분에게 조금 많은것을 요구하려고 합니다.",
              "",
              "원격 저장소를 하나 만들고(`git clone`), 원격 저장소에 몇가지 가짜 변경을 만들고 로컬에서 커밋하고 원격의 변경들을 가져오세요. Goal과 같은 결과가 나오면 됩니다. 몇개의 레슨이 하나에 있다고 보면 되겠네요! 도전해봅시다."
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
              "## Mô phỏng hợp tác",
              "",
              "Bây giờ khó đây -- để chuẩn bị cho những bài học tới, chúng tôi cần chỉ bạn cách kéo về những cập nhật có trên kho chứa từ xa.",
              "",
              "Có nghĩa là ta cần \"giả vờ\" kho chứa từ xa được cập nhật bởi đồng nghiệp / bạn / cộng tác viên của bạn, có khi là một nhánh xác định hoặc là một số commit.",
              "",
              "Để làm điều này, chúng tôi sẽ giới thiệu cho bạn một lệnh tự tạo `git fakeTeamwork`! Cái tên nói lên tất cả, cùng xem thử bản giới thiệu..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Hành xử mặc định của `fakeTeamwork` đơn giản là tạo ra một commit ở trên nhánh main từ xa."
            ],
            "afterMarkdowns": [
              "Đó -- kho chứa từ xa đã được cập nhật thêm một commit, và ta chưa tải commit đó xuống vì ta chưa hề chạy lệnh `git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Bạn cũng có thể chỉ định số lượng commit bằng cách thêm con số đằng sau câu lệnh."
            ],
            "afterMarkdowns": [
              "Chỉ với một câu lệnh ta có thể giả lập tạo ra 3 commit trên nhánh `foo` từ xa của ta."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Các cấp độ tới sẽ khá là khó, nên ở cấp độ này chúng tôi sẽ yêu cầu bạn thêm một chút.",
              "",
              "Sao chép một kho chứa từ xa (sử dụng `git clone`), sau đó mô phỏng một số thay đổi trong kho chứa từ xa mà bạn vừa tạo, sau đó thực hiện một số commit trên nhánh cục bộ của riêng bạn, sau đó kéo các thay đổi từ kho chứa từ xa. Nhiều bài học trong một bài."
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
              "## Simulacija sodelovanja",
              "",
              "Tule imamo izziv -- za nekaj naslednjih lekcij te moramo naučiti, kako potegniti dol spremembe, ki so bile narejene na oddaljenem repozitoriju.",
              "",
              "To pomeni, da se moramo pravzaprav \"pretvarjati\", da je oddaljen branch posodobil kak sodelavec, včasih na določenem branchu ali določeno število commitov.",
              "",
              "Da bi to lahko naredili, smo uvedli ukaz `git fakeTeamwork`! Poglejmo prikaz ..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Privzeto delovanje `fakeTeamwork` je, da samo doda commit na main:"
            ],
            "afterMarkdowns": [
              "Tako -- oddaljen repo je bil posodobljen z novim commitom, katerega še nismo potegnili k sebi, ker še nismo pognali ukaza `git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Prav tako lahko določimo tudi število commitov ali ime brancha tako, da jih dodamo na koncu:"
            ],
            "afterMarkdowns": [
              "Z enim ukazom smo simulirali sodelavca, ki je dodal tri commite na `foo` branch na našem oddaljnem repotu."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Naslednje stopnje bodo precej težke, zato od tebe v tej stopnji zahtevamo še več.",
              "",
              "Naredi oddaljen repo (z `git clone`), simuliraj nekaj sprememb na tem repotu, sam commitaj, nato pa potegni dol spremembe. Kot da bi bilo več lekcij v eni!"
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
              "## Symulacja pracy zespołowej",
              "",
              "Pora na małe oszustwo -- na potrzeby niektórych z nadchodzących lekcji musimy nauczyć cię, jak ściągać (pull) zmiany, które zostały wprowadzone na zdalnej gałęzi przez innych.",
              "",
              "W zasadzie oznacza to, że musimy \"udawać\", że zdalne repozytorium zostało zaktualizowane przez jednego z twoich współpracowników / przyjaciół / współtwórców na jakiejś gałęzi lub kilku commitach.",
              "",
              "Aby to zrobić, wprowadziliśmy polecenie `git fakeTeamwork`! Po polsku byłoby to symulujPracę :D -- zobaczmy, jak to działa..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Domyślnym zachowaniem `fakeTeamwork` jest po prostu wrzucenie commita na gałąź main."
            ],
            "afterMarkdowns": [
              "Proszę bardzo - zdalny serwer został zaktualizowany o nowy commit, a my jeszcze go nie pobraliśmy, ponieważ nie uruchomiliśmy `git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Możesz również określić liczbę commitów lub gałąź poprzez dołączenie ich do polecenia."
            ],
            "afterMarkdowns": [
              "Jednym poleceniem symulujemy, że kolega z zespołu wypycha trzy commity do gałęzi `foo` na zdalnym repozytorium."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Kolejne poziomy będą dość trudne, więc tym razem twoje zadanie też jest bardziej wymagające.",
              "",
              "Nie bój się, stwórz zdalne repozytorium (używając `git clone`), zasymuluj na nim kilka zmian i zatwierdź je, a następnie ściągnij (pull) je. To jak kilka lekcji w jednej!"
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
              "## Simulare la cooperazione",
              "",
              "La questione è la seguente -- per alcune delle prossime lezioni, dovremo insegnarti come recuperare delle modifiche effettuate al repository remoto.",
              "",
              "Questo significa che dobbiamo essenzialmente \"far finta\" che quest'ultimo sia stato aggiornato da uno dei nostri colleghi / amici / collaboratori, a volte in un certo ramo o per un certo numero di commit.",
              "",
              "Per fare ciò, abbiamo introdotto un comando ad hoc: `git fakeTeamwork`. È abbastanza autoesplicativo, vediamo una demo..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Il comportamento predefinito di `fakeTeamwork` consiste semplicemente nell'effettuare un commit sul main."
            ],
            "afterMarkdowns": [
              "Ecco qua -- il repository remoto è stato aggiornato con un nuovo commit, e non lo abbiamo ancora scaricato in quanto non abbiamo eseguito `git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Puoi anche specificare il numero di commit o il ramo su cui effettuarle specificandolo nel comando."
            ],
            "afterMarkdowns": [
              "Con un comando abbiamo simulato un nostro collega che invia tre commit al ramo `foo` del repository remoto."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "I prossimi livelli saranno abbastanza tosti, quindi ti chiediamo un po' di più già da ora.",
              "",
              "Crea un repository remoto (con `git clone`), simula alcune modifiche su quel repository, effettua tu un commit, e poi recupera quelle modifiche. È come più lezioni in una!"
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
              "## İş birliğini simüle etmek",
              "",
              "Şimdi zor olan kısım şu -- bu gelecek derslerin bazıları için, uzaktaki bir depoda yapılan değişiklikleri nasıl çekeceğinizi öğretmemiz gerekiyor.",
              "",
              "Bu, esasen uzaktaki deponun, iş arkadaşlarınızdan / arkadaşlarınızdan / iş birliği yaptığınız kişilerden biri tarafından, bazen belirli bir dalda ya da belli sayıda commit ile güncellendiğini \"taklit etmemiz\" gerektiği anlamına geliyor.",
              "",
              "Bunu yapabilmek için uygun bir şekilde adlandırılmış `git fakeTeamwork` komutunu tanıttık! Oldukça açıklayıcı bir komut, haydi bir demo görelim..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "`fakeTeamwork` komutunun varsayılan davranışı, ana dalda bir commit oluşturup eklemektir."
            ],
            "afterMarkdowns": [
              "İşte bu kadar -- uzaktaki depo yeni bir commit ile güncellendi ve biz henüz bu commit'i indirmedik çünkü `git fetch` komutunu çalıştırmadık."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Komuta bir dal adı veya commit sayısını ekleyerek bunları da belirtebilirsiniz."
            ],
            "afterMarkdowns": [
              "Tek bir komutla, takım arkadaşınızın uzaktaki depodaki `foo` dalına üç commit gönderdiğini simüle ettik."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Gelecek seviyeler oldukça zorlayıcı olacak, bu yüzden bu seviyede sizden daha fazlasını istiyoruz.",
              "",
              "Bir uzaktan depo oluşturun (`git clone` ile), o uzaktan depoda bazı değişiklikleri taklit edin, kendi commit'inizi yapın ve ardından bu değişiklikleri indirin. Bu, birkaç dersin bir araya gelmiş hali gibi!"
            ]
          }
        }
      ]
    }
  }
};