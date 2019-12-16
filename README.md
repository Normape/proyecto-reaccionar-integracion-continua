# Integracion Continua

## Requerimientos

- [git][git] v2.14.1 o mayor
- [NodeJS][node] v8.9.4 o mayor
- [npm][npm] v5.6.0 o mayor

Verificar las versiones instaladas

```
git --version
node --version
npm --version
```

## Setup

```
git clone https://github.com/Normape/proyecto-reaccionar-integracion-continua/
cd proyecto-reaccionar-integracion-continua/
npm run setup --silent
```

## Corriendo la App

To get the app up and running (and really see if it worked), run:

```shell
npm run dev
```

Capturas de pantalla

<img src="other/screenshot.png" alt="App Screenshot" title="App Screenshot" width="700" />

## Pagina de About

### Integración Continua

- [Travis][build] (Linux): find config in `.travis.yml`
- [AppVeyor][win-build] (Windows): find config in `appveyor.yml`

### Registro y Login

**Detener todos los servidores**, hit <kbd>Ctrl</kbd> + <kbd>C</kbd>.

## Troubleshooting

<details>

<summary>"npm run setup" command not working</summary>

Esto es lo que hace el script de configuración. Si falla, intente hacer cada una de estas cosas individualmente usted mismo:

```
# verificar que su entorno funcionará con el proyecto
node ./scripts/verify

# instalar dependencias en la raíz del repositorio
npm install

# instalar dependencias en el directorio compartido
npm install --prefix shared

# instalar dependencias en el directorio del servidor
npm install --prefix server

# instalar dependencias en el directorio del cliente
npm install --prefix client

# verificar que el proyecto esté listo para ejecutarse
npm run lint
npm run test:coverage
npm run test:e2e:run
```

</details>

<details>

<summary>"npm run dev" command not working</summary>

Si no funciona para usted, puede comenzar cada uno de ellos individualmente
(en terminales separadas):

```
cd server
npm run dev
```

```
cd client
npm run dev
```

</details>
