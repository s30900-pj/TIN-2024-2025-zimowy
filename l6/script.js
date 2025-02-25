const auto = {
                rok: 2010,
                przebieg: 120000,
                cena_wyjsciowa: 20000,
                cena_koncowa: 18000,
    
                powiekszCeneWyjsciowa: function () {
                    this.cena_wyjsciowa += 1000;
                },
    
                obnizCeneKoncowaZaRok: function () {
                    const wiek = new Date().getFullYear() - this.rok;
                    this.cena_koncowa -= wiek * 1000;
                },
    
                obnizCeneKoncowaZaPrzebieg: function () {
                    const obnizka = Math.floor(this.przebieg / 100000) * 10000;
                    this.cena_koncowa -= obnizka;
                },
    
                dopiszPrzebiegIRok: function (nowyPrzebieg, nowyRok) {
                    this.przebieg = nowyPrzebieg;
                    this.rok = nowyRok;
                    this.powiekszCeneWyjsciowa();
                    this.obnizCeneKoncowaZaRok();
                    this.obnizCeneKoncowaZaPrzebieg();
                },
            };
    
            const samochody = [
                { rok: 2015, przebieg: 80000, cena_wyjsciowa: 25000, cena_koncowa: 22000 },
                { rok: 2012, przebieg: 110000, cena_wyjsciowa: 18000, cena_koncowa: 16000 },
                { rok: 2018, przebieg: 50000, cena_wyjsciowa: 30000, cena_koncowa: 28000 },
            ];
    
            function dodajAutoDoTablicy(auto) {
                if (auto.cena_wyjsciowa > 10000) {
                    samochody.push(auto);
                }
            }
    
            function zwiekszRokDlaWszystkich() {
                for (const auto of samochody) {
                    auto.rok++;
                }
            }
    
            auto.powiekszCeneWyjsciowa();
            console.log(auto.cena_wyjsciowa);
    
            auto.obnizCeneKoncowaZaRok();
            console.log(auto.cena_koncowa);
    
            auto.obnizCeneKoncowaZaPrzebieg();
            console.log(auto.cena_koncowa);
    
            auto.dopiszPrzebiegIRok(130000, 2012);
            console.log(auto);
    
            dodajAutoDoTablicy(auto);
            console.log(samochody);
    
            zwiekszRokDlaWszystkich();
            console.log(samochody);
    
            const autoOutput = `
                <p>Cena wyjściowa: ${auto.cena_wyjsciowa}</p>
                <p>Cena końcowa: ${auto.cena_koncowa}</p>
                <p>Samochody: ${JSON.stringify(samochody, null, 2)}</p>
            `;
            document.getElementById('autoOutput').innerHTML = autoOutput;
    
            class Ocena {
                constructor(przedmiot, wartosc) {
                    this.przedmiot = przedmiot;
                    this.wartosc = wartosc;
                }
            }
    
            class Student {
                constructor(imie, nazwisko) {
                    this.imie = imie;
                    this.nazwisko = nazwisko;
                    this._oceny = [];
                    this.sredniaOcen = 0;
                }
    
                set oceny(ocena) {
                    if (ocena instanceof Ocena) {
                        this._oceny.push(ocena);
                        this.obliczSredniaOcen();
                    } else {
                        console.log("Błąd: Przekazany obiekt nie jest instancją klasy Ocena.");
                    }
                }
    
                get oceny() {
                    return this._oceny.map(ocena => `Przedmiot: ${ocena.przedmiot} - ocena ${ocena.wartosc}`).join('. ');
                }
    
                obliczSredniaOcen() {
                    const sumaOcen = this._oceny.reduce((suma, ocena) => suma + ocena.wartosc, 0);
                    this.sredniaOcen = this._oceny.length > 0 ? sumaOcen / this._oceny.length : 0;
                }
    
                hello() {
                    return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.sredniaOcen}.`;
                }
            }
    
            let s = new Student('Jan', 'Kowalski');
    
            s.oceny = new Ocena('WPR', 4);
            s.oceny = new Ocena('TIN', 3);
            s.oceny = new Ocena('POJ', 2);
    
            console.log(s.hello());
            console.log(s.oceny);
    
            const studentOutput = `
                <p>${s.hello()}</p>
                <p>Oceny: ${s.oceny}</p>
            `;
            document.getElementById('studentOutput').innerHTML = studentOutput;
