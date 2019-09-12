# Unipäiväkirja

Tiimi: Marja, Pekka, Hanna, Santtu

## Johdanto

Projektin tarkoituksena on toteuttaa ja julkaista verkkopohjainen unipäiväkirjasovellus. Unipäiväkirjan laatimisessa sovelletaan Työterveyslaitoksen ja Käypä hoito -suosituksen mukaisia pohjia, joita lääkäri voi hyödyntää anamneesityökaluna. Käyttäjä on kuka tahansa, joka haluaa seurata ja selvittää omaa unirytmiään ja siihen vaikuttaneita ulkoisia asioita. Käyttäjä syöttää sovellukseen nukahtamis- ja heräämisajat sekä muita mahdollisia huomioita edellisestä unijaksosta. Käyttäjä saa palvelusta tiedon edellisistä uniajoistaan vertailua ja johtopäätöksiä varten. Projektin päättyessä valmiina on visuaalisesti miellyttävä ja teknisesti toimiva sovellusratkaisu.

Palvelutoteutaan Java Springboot kehystä käyttäen ja thymeleaf template engineä hyödyntäen. Tietokantajärejstelmänä toimii MariaDB. Sovelluksesta tehdään responsiivinen eli se toimii luontevasti kaikilla päätelaitteilla.

## Järjestelmän määrittely

Peruskäyttäjä on henkilö, joka palveluun kirjautumalla pystyy lisäämään, muokkaamaan, tarkastelemaan ja poistamaan omia tietojaan.

Tarkastelija on henkilö, joka palveluun kirjautumalla pystyy tarkastelemaan palveluun syötettyjä tietoja haluamansa peruskäyttäjän osalta. Tarkastelija voi olla esimerkiksi lääkäri tai terapiaryhmän vetäjä.

Järjestelmän toiminnot (peruskäyttäjä)
- palveluun rekisteröityminen
- sisäänkirjautuminen
- tietojen syöttäminen: nukahtamisaika, heräämisaika, unenlaadun arviointi, uneen vaikuttaneet ulkopuoliset seikat.
- tietojen tarkastelu eri aikaväleillä
- tietojen muokaaminen
- tietojen poistaminen
- tarkasteluoikeuden myöntäminen
- uloskirjautuminen

Järjestelmän toiminnot (tarkastelija)
- palveluun rekisteröityminen
- sisäänkirjautuminen
- tarkasteluoikeuden pyytäminen
- tarkasteltavan henkilön valinta
- tietojen tarkastelu eri aikaväleillä
- uloskirjautuminen


## Käyttöliittymä

Käyttöliittymäkaavio, peruskäyttäjä
![peruskäyttäjä](https://raw.githubusercontent.com/hannayj/sleepdiary/master/images/kayttoliittymakaavio_peruskayttaja.png)

Käyttöliittymäkaavio, tarkastelija
![tarkastelija](https://raw.githubusercontent.com/hannayj/sleepdiary/master/images/kayttoliittymakaavio_tarkastelija.png)

## Tietokanta

Kaavio
![tietokantakaavio](https://raw.githubusercontent.com/hannayj/sleepdiary/master/images/DB_version2.png)

> ### User
> _Kayttajat-taulu sisältää käyttäjätilit._
>
> Kenttä | Tyyppi | Kuvaus
> ------ | ------ | ------
> id | int PK | Käyttäjän id
> name | varchar(50) |  Tilin nimimerkki
> password | varchar(50) | Tilin salasana
> userLevel | int FK | Viittaus käyttäjätasoon [UserLevel](#UserLevel)-taulussa

> ### UserLevel
> _Kayttajatasot-taulu sisältää käyttäjien käyttäjätasot._
>
> Kenttä | Tyyppi | Kuvaus
> ------ | ------ | ------
> id | int PK | Kayttajatason id
> userLevel | varchar(10) | Käyttäjätason arvo: "user" tai "examiner"

> ### Permission
> _Luvat-taulu sisältää luvat käyttäjän tietojen takasteluun. Lupa viittaa yhteen käyttäjään ja sillä on yksi tarkastelija._
>
> Kenttä | Tyyppi | Kuvaus
> ------ | ------ | ------
> id | int PK | Tilin id
> user | int FK | Viittaus käyttäjään [User](#User)-taulussa, jonka tietoja voidaan tarkastella
> examiner | int FK | Viittaus käyttäjään [User](#User)-taulussa, jolla on lupa tarkastella tietoja

> ### SleepPeriod
> _Unijaksot-taulu sisältää käyttäjien unijaksot. Unijakso liittyy aina yhteen päiväkirjamerkintään._
>
> Kenttä | Tyyppi | Kuvaus
> ------ | ------ | ------
> id | int PK | Unijakson id
> startTime | DateTime
> endTime | DateTime
> diaryEntry | int FK | Viittaus unenlaatuun [DiaryEntry](#DiaryEntry)-taulussa

> ### DiaryEntry
> _Päiväkirjamerkinnät-tauluun linkittyvät päivän unijaksot ja niihin liittyvät kommentit._
>
> Kenttä | Tyyppi | Kuvaus
> ------ | ------ | ------
> id | int PK | Unenlaadun id
> user | int FK | Viittaus käyttäjään [User](#User)-taulussa
> sleepQuality | int FK | Viittaus unijaksoon [SleepQuality](#SleepQuality)-taulussa

> ### SleepQuality
> _Unenlaadut-taulu sisältää unijaksojen unenlaadut._
>
> Kenttä | Tyyppi | Kuvaus
> ------ | ------ | ------
> id | int PK | Unenlaadun id
> sleepQuality | varchar(10) | Unenlaadun arvo voi olla 1, 2, 3, 4, tai 5

> ### Comment
> _Kommentit-taulu sisältää unijaksoon liittyvät kommentit. Kommentilla on yksi kirjoittaja ja se liittyy yhteen unijaksoon._
>
> Kenttä | Tyyppi | Kuvaus
> ------ | ------ | ------
> id | int PK | Kommentin id
> commentText | varchar(200)
> time | DateTime
> user | int FK | Viittaus käyttäjään [User](#User)-taulussa
> diaryEntry | int FK | Viittaus päiväkirjamerkintään [DiaryEntry](#DiaryEntry)-taulussa

## Tekninen kuvaus, jonka tietoja voidaan tarkastella

Teknisessä kuvauksessa esitetään järjestelmän toteutuksen suunnittelun tekniset
ratkaisut, esim.
-   Missä mikäkin järjestelmän komponentti ajetaan (tietokone, palvelinohjelma)
    ja komponenttien väliset yhteydet (vaikkapa tähän tyyliin:
    https://security.ufl.edu/it-workers/risk-assessment/creating-an-information-systemdata-flow-diagram/)
-   Palvelintoteutuksen yleiskuvaus
-   Keskeisten rajapintojen kuvaukset, esimerkit client-server -rajapinnan käytöstä (sekvenssikaaviot)
-   Toteutuksen yleiset periaatteet, esim. käyttäjän tunnistus, istunnonhallinta.

Tämän lisäksi

-   ohjelmakoodin tulee olla kommentoitua
-   luokkien, metodien ja muuttujien tulee olla kuvaavasti nimettyjä ja noudattaa
    johdonmukaisia nimeämiskäytäntöjä
-   ohjelmiston pitää olla organisoitu komponentteihin niin, että turhalta toistolta
    vältytään

## Testaus

Tässä kohdin selvitetään, miten ohjelmiston oikea toiminta varmistetaan
testaamalla projektin aikana: millaisia testauksia tehdään ja missä vaiheessa.
Testauksen tarkemmat sisällöt ja testisuoritusten tulosten raportit kirjataan
erillisiin dokumentteihin.

Tänne kirjataan myös lopuksi järjestelmän tunnetut ongelmat, joita ei ole korjattu.

## Asennustiedot

Järjestelmän asennus on syytä dokumentoida kahdesta näkökulmasta:

-   järjestelmän kehitysympäristö: miten järjestelmän kehitysympäristön saisi
    rakennettua johonkin toiseen koneeseen

-   järjestelmän asentaminen tuotantoympäristöön: miten järjestelmän saisi
    asennettua johonkin uuteen ympäristöön.

Asennusohjeesta tulisi ainakin käydä ilmi, miten käytettävä tietokanta ja
käyttäjät tulee ohjelmistoa asentaessa määritellä (käytettävä tietokanta,
käyttäjätunnus, salasana, tietokannan luonti yms.).

## Käynnistys- ja käyttöohje

Tyypillisesti tässä riittää kertoa ohjelman käynnistykseen tarvittava URL sekä
mahdolliset kirjautumiseen tarvittavat tunnukset. Jos järjestelmän
käynnistämiseen tai käyttöön liittyy joitain muita toimenpiteitä tai toimintajärjestykseen liittyviä asioita, nekin kerrotaan tässä yhteydessä.

Usko tai älä, tulet tarvitsemaan tätä itsekin, kun tauon jälkeen palaat
järjestelmän pariin !

## Tietoturva

Pohdintaa tietoturvasta.

![logo](https://raw.githubusercontent.com/hannayj/sleepdiary/master/images/logo_dark.png)
