## End Point para Alertas via POST HTTP Notification

### Recebe os alertas do tipo HTTP Notification do Graylog e Grafana
#### A aplicação receberá nos endpoints abaixo o POST HTTP Notification enviado pelo Graylog e Grafana. Após tratar o objeto JSON, enviará um email utilizando as configurações setadas no arquivo <strong>.env</strong><br><br>

<img src="./img/swagger.png" /><br><br>

#### O envio de email da aplicação utiliza um servidor SMTP previamente configurado no arquivo <strong>.env</strong> na raiz do projeto, conforme abaixo<br><br>

```env
# SERVER CONFIG
PORT=3000

# Email
SMTP_SERVER=
SMTP_USER=
SMTP_PASS=
SMTP_PORT=587
SMTP_FROM=
SMTP_TO=
```
#### <strong>Observação: </strong><br>Em SMTP_TO, separe por vírgula, sem espaços, a lista de email que receberá os alertas como exemplo abaixo<br><br>
```env
SMTP_TO=email1@example.com,email2@example.com
```
<br>

```js
/**
 * Projeto: End Point for Alerts
 * Author: Jeferson Rodrigues
 * Email: jefersonr.santos@outlook.com
 * Created at: 2021-09-15
 * Updated at: 2021-09-15
 * 
 * Aplicação Backend desenvolvida com Typescript
 */
```
