    "use strict";

    const QUESTIONS = [{"id":1,"question":"Bestimme diesen Fisch.","options":["Zander","Egli","Schleie"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/zander1.png","answer":0,"imageKey":"zander"},{"id":2,"question":"Bestimme diesen Fisch.","options":["Schleie","Karpfen","Alet"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/karpfen1.png","answer":1,"imageKey":"karpfen"},{"id":3,"question":"Bestimme diesen Fisch.","options":["Egli","Zander","Hecht"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/hecht1.png","answer":2,"imageKey":"hecht"},{"id":4,"question":"Bestimme diesen Fisch.","options":["Nase","Barbe","Alet"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/barbe1.png","answer":1,"imageKey":"barbe"},{"id":5,"question":"Bestimme diesen Fisch.","options":["Karpfen","Nase","Felche"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/nase1.png","answer":1,"imageKey":"nase"},{"id":6,"question":"Bestimme diesen Fisch.","options":["Schleie","Rotauge","Brachsmen"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/schleie1.png","answer":0,"imageKey":"schleie"},{"id":7,"question":"Bestimme diesen Fisch.","options":["Felche","Seesaibling","Alet"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/felche1.png","answer":0,"imageKey":"felche"},{"id":8,"question":"Bestimme diesen Fisch.","options":["Wels","Aal","Trüsche"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/truesche1.png","answer":2,"imageKey":"truesche"},{"id":9,"question":"Bestimme diesen Fisch.","options":["Rotauge","Brachsmen","Rotfeder"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/brachsmen1.png","answer":1,"imageKey":"brachsmen"},{"id":10,"question":"Bestimme diesen Fisch.","options":["Rotfeder","Brachsmen","Rotauge"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/rotauge1.png","answer":2,"imageKey":"rotauge"},{"id":11,"question":"Bestimme diesen Fisch.","options":["Barbe","Alet","Felche"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/barbe2.png","answer":0,"imageKey":"barbe"},{"id":12,"question":"Bestimme diesen Fisch.","options":["Rotauge","Rotfeder","Alet"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/rotfeder1.png","answer":1,"imageKey":"rotfeder"},{"id":13,"question":"Bestimme diesen Fisch.","options":["Zander","Egli","Hecht"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/egli1.png","answer":1,"imageKey":"egli"},{"id":14,"question":"Bestimme diesen Fisch.","options":["Regenbogenforelle","Seeforelle","Seesaibling"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/regenbogenforelle1.png","answer":0,"imageKey":"regenbogenforelle"},{"id":15,"question":"Bestimme diesen Fisch.","options":["Seeforelle","Äsche","Barbe"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/aesche1.png","answer":1,"imageKey":"aesche"},{"id":16,"question":"Bestimme diesen Fisch.","options":["Seesaibling","Felche","Bachforelle"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/bachforelle1.png","answer":2,"imageKey":"bachforelle"},{"id":17,"question":"Bestimme diesen Fisch.","options":["Äsche","Seeforelle","Felche"],"category":"fish","categoryTitle":"Fischkunde","topic":"identify","topicTitle":"Fische erkennen","image":"images/seeforelle1.png","answer":1,"imageKey":"seeforelle"},{"id":18,"question":"Welche Fischarten sind typische Kieslaicher?","options":["z.B. Forelle, Äsche, Barbe, Nase","z.B. Hecht, Egli, Rotfeder","z.B. Felche, Karpfen Schleie"],"category":"fish","categoryTitle":"Fischkunde","topic":"species","topicTitle":"Arten, Schutz & Vielfalt","image":null,"answer":0},{"id":19,"question":"Welche Ansprüche stellen Forellen an ihre Laichplätze?","options":["Lockerer, gut durchströmter Kies","Dichter Pflanzenbewuchs","Mindestens 80 cm Wassertiefe"],"category":"fish","categoryTitle":"Fischkunde","topic":"species","topicTitle":"Arten, Schutz & Vielfalt","image":null,"answer":0},{"id":20,"question":"Warum sind gewisse Fischarten geschützt?","options":["Weil sie aus touristischen Gründen interessant sind","Weil es Arten gibt, die stark gefährdet oder vom Aussterben bedroht sind","Weil es Arten gibt, die man als Futter für Raubfische fördern muss"],"category":"fish","categoryTitle":"Fischkunde","topic":"species","topicTitle":"Arten, Schutz & Vielfalt","image":null,"answer":1},{"id":21,"question":"Gibt es gesamtschweizerisch geschützte Arten?","options":["Nein, diese Regelung treffen nur die Kantone","Ja, in der Verordnung zum Bundesgesetz über die Fischerei","Ja, aber die geschützten Arten sind alle schon ausgestorben"],"category":"fish","categoryTitle":"Fischkunde","topic":"species","topicTitle":"Arten, Schutz & Vielfalt","image":null,"answer":1},{"id":22,"question":"Was muss vorgekehrt werden, wenn eine geschützte Art am Haken hängt?","options":["Den Fisch möglichst im Wasser vom Haken lösen und vorsichtig zurücksetzen","Aus dem Wasser nehmen, fotografieren und genau vermessen","Den Fisch lebend mitnehmen und dem Fischereiaufseher zeigen"],"category":"fish","categoryTitle":"Fischkunde","topic":"species","topicTitle":"Arten, Schutz & Vielfalt","image":null,"answer":0},{"id":23,"question":"Warum sind die nicht einheimischen Krebsarten eine Gefahr für die einheimischen Arten?","options":["Weil sie die Krebspest verbreiten können","Weil sie schneller wachsen","Weil sie sich vor allem von Fischlaich ernähren"],"category":"fish","categoryTitle":"Fischkunde","topic":"species","topicTitle":"Arten, Schutz & Vielfalt","image":null,"answer":0},{"id":24,"question":"Welche Art gehört nicht zu den drei einheimischen Krebsen der Schweiz?","options":["Kamberkrebs","Dohlenkrebs","Steinkrebs"],"category":"fish","categoryTitle":"Fischkunde","topic":"species","topicTitle":"Arten, Schutz & Vielfalt","image":null,"answer":0},{"id":25,"question":"Zu welcher Familie der Fische gehören die meisten unserer einheimischen kleinwüchsigen Fischarten?","options":["Barschartige","Forellenartige","Karpfenartige"],"category":"fish","categoryTitle":"Fischkunde","topic":"species","topicTitle":"Arten, Schutz & Vielfalt","image":null,"answer":2},{"id":26,"question":"Was versteht man unter dem Begriff Biodiversität?","options":["Fische schonend zurücksetzen","Es ist eine Fischkrankheit","Die gesamte biologische Vielfalt, von der genetischen Vielfalt innerhalb von Arten bis zur Ökosystem-Vielfalt"],"category":"fish","categoryTitle":"Fischkunde","topic":"species","topicTitle":"Arten, Schutz & Vielfalt","image":null,"answer":2},{"id":27,"question":"Welche Familie der Fische ist in der Schweiz für ihre aussergewöhnlich grosse Artenvielfalt bekannt?","options":["Die Felchen","Die Hechte","Die Barsche"],"category":"fish","categoryTitle":"Fischkunde","topic":"species","topicTitle":"Arten, Schutz & Vielfalt","image":null,"answer":0},{"id":28,"question":"In welchem Kanton der Schweiz sind sehr viele Fischarten heimisch, die in der übrigen Schweiz nicht gefunden werden?","options":["Kanton Luzern","Kanton Neuenburg","Kanton Tessin"],"category":"fish","categoryTitle":"Fischkunde","topic":"species","topicTitle":"Arten, Schutz & Vielfalt","image":null,"answer":2},{"id":29,"question":"Wie passen sich Fisch-Populationen an ihren Lebensraum an?","options":["Durch schnelles Wachstum","Durch natürliche Auslese und Evolution","Durch reduzierte Aktivität"],"category":"fish","categoryTitle":"Fischkunde","topic":"species","topicTitle":"Arten, Schutz & Vielfalt","image":null,"answer":1},{"id":30,"question":"Warum ist genetische Vielfalt wichtig?","options":["Sie erhöht die Anpassungsfähigkeit einer Fischart gegenüber Umweltveränderungen","Sie ist bei Fischen unwichtig","Damit das Fischfleisch nach dem Zubereiten besser schmeckt"],"category":"fish","categoryTitle":"Fischkunde","topic":"species","topicTitle":"Arten, Schutz & Vielfalt","image":null,"answer":0},{"id":31,"question":"Wie kann die genetische Vielfalt bei Fischen am besten erhalten werden?","options":["Indem wir die natürliche Fortpflanzung fördern","Durch Besatz mit möglichst grossen Fischen","Mit gezielter Befischung von nicht angepassten Fischen"],"category":"fish","categoryTitle":"Fischkunde","topic":"species","topicTitle":"Arten, Schutz & Vielfalt","image":null,"answer":0},{"id":32,"question":"Welche Fische laichen im Frühling?","options":["Äschen","Seesaiblinge","Forellen"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":0},{"id":33,"question":"Mit welcher Flosse kann eine rasche Vorwärtsbewegung ausgeführt werden?","options":["Rückenflosse","Afterflosse","Schwanzflosse"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":2},{"id":34,"question":"Wozu dienen die Schuppen der Fische?","options":["Sie bieten mechanischen Schutz","Sie ermöglichen dem Fisch schnelles Schwimmen unter Wasser","Sie bilden eine Kalkreserve für den Fisch"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":0},{"id":35,"question":"Wozu dienen die Kiemen der Fische?","options":["Sie unterstützen die Nase beim Riechen","Sie sind das wichtigste Atmungsorgan der einheimischen Fische","Sie sind für den Temperaturausgleich verantwortlich"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":1},{"id":36,"question":"Welches Organ hilft dem Fisch beim Einhalten seiner Schwimmhöhe?","options":["Kiemen","Schwimmblase","Rückenflosse"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":1},{"id":37,"question":"Wozu dient das Seitenlinienorgan?","options":["Es dient dem Hören","Zur Unterscheidung zwischen den Geschlechtern","Der Erfühlung der Umgebung"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":2},{"id":38,"question":"Wie ist die Körperoberfläche des Aals beschaffen?","options":["Schuppenlos","Ganz kleine Schuppen","Grosse Schuppen"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":1},{"id":39,"question":"Welcher Salmonide hat eine ausgeprägte, grosse Rückenflosse?","options":["Regenbogenforelle","Äsche","Seesaibling"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":1},{"id":40,"question":"Welcher Fisch hat weder Schwimmblase noch Schwimmblasengang?","options":["Groppe","Elritze","Gründling"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":0},{"id":41,"question":"Welcher Fisch hat ein unterständiges Maul?","options":["Nase","Laube","Forelle"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":0},{"id":42,"question":"Wie ist die Mundpartie des Egli ausgestattet?","options":["Zahnlos","Wenige, grosse Zähne","Viele, kleine Zähnchen"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":2},{"id":43,"question":"Was passiert, wenn ein Fisch sehr schnell aus grosser Tiefe heraufgeholt wird?","options":["Die Luft in seiner Schwimmblase dehnt sich aus","Die Luft in seiner Schwimmblase wird zusammengedrückt","Das Herz des Fischs hört auf zu schlagen und er muss nach der Landung nicht mehr sachgemäss getötet werden"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":0},{"id":44,"question":"Vertreter welcher Fischgruppe haben eine Fettflosse?","options":["Forellenartige","Barschartige","Karpfenartige"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":0},{"id":45,"question":"Wie nehmen Fische mit einem unterständigen Mund ihre Nahrung typischerweise auf?","options":["Von der Wasseroberfläche","Vom Gewässergrund","Aus dem freien Wasser"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":1},{"id":46,"question":"Welchen Vorteil haben Fische mit pfeilförmiger Körperform wie der Hecht?","options":["Sie können auf kurzer Strecke eine hohe Geschwindigkeit erreichen","Sie sehen gefährlicher aus und haben deshalb weniger Feinde","Sie können sich besser im Schilf verstecken"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":0},{"id":47,"question":"Können Hautschäden bei Fischen zum Tod führen?","options":["Nein, nur zu Pilzerkrankungen","Ja, bei starken Beeinträchtigungen","Nein, aber zu Infektionen"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":1},{"id":48,"question":"Wo sind krankheitsverdächtige Fische zu melden?","options":["Beim nächsten Laboratorium","Bei der Fischereiaufsicht","Beim Bundesamt für Veterinärwesen"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":1},{"id":49,"question":"Welche Gewässer sind von der proliferativen Nierenkrankheit (PKD) besonders häufig betroffen?","options":["Seen","Kühle Bergbäche","Wärmere Fliessgewässer des Mittellandes"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":2},{"id":50,"question":"Warum darf ein lebender Fisch nur mit nassen Händen angefasst werden?","options":["So ist der Temperaturunterschied für den Fisch nicht zu gross","Um die Schleimschicht nicht zu verletzen","Damit wir ihn besser zurücksetzen können"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":1},{"id":51,"question":"Was können Angler tun, um die Weiterverbreitung gewisser Krankheiten (z. B. Saprolegnia, Fischschimmel) einzudämmen?","options":["Fischer können da nichts tun, Fischkrankheiten sind einzig Sache des Bundesamts für Veterinärwesen","Gerätschaften sorgfältig reinigen und vollständig trocknen lassen, nachdem sie an Gewässern mit besonderem Krankheitsbefall geangelt haben","In Gewässern mit besonderem Krankheitsbefall auch geschützte Fische entnehmen"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":1},{"id":52,"question":"Welche Faktoren führen dazu, dass Fischkrankheiten schneller ausbrechen?","options":["Stressfaktoren, wie etwa hohe Wassertemperatur, Verunreinigungen, Pestizide, Schwall und Sunk etc.","Fischereiutensilien, die nicht mit Desinfektionslösung gespült wurden","Mangel an Antibiotika"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":0},{"id":53,"question":"Wie können Krankheitserreger an Geräten und Ausrüstung abgetötet werden?","options":["Hitzebehandlung, Austrocknung oder Desinfektion der Ausrüstung","Lauwarmes Wasser","Das geht nicht"],"category":"fish","categoryTitle":"Fischkunde","topic":"biology","topicTitle":"Biologie & Gesundheit","image":null,"answer":0},{"id":54,"question":"Auf welche Region trifft folgende Beschreibung zu: Quellgewässer mit kühlem, sauerstoffreichem Wasser?","options":["Barbenregion","Forellenregion","Äschenregion"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"waters","topicTitle":"Lebensräume & Gewässerkunde","image":null,"answer":1},{"id":55,"question":"Welche Eigenschaften ändern sich, wenn aus dem Bach ein Strom wird?","options":["Gefälle und Fliessgeschwindigkeit nehmen ab","Der Untergrund im Flussbett wird immer grobkörniger","Maximaltemperatur und Temperaturschwankungen werden kleiner"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"waters","topicTitle":"Lebensräume & Gewässerkunde","image":null,"answer":0},{"id":56,"question":"Warum sind Flachwasserzonen wichtig?","options":["Der Fischer kann besser waten","Damit das Wasser im Sommer schneller warm wird","Als Lebensraum für Jungfische"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"waters","topicTitle":"Lebensräume & Gewässerkunde","image":null,"answer":2},{"id":57,"question":"Was fördert eine vielfältige Fischartenvielfalt?","options":["Intensive Landwirtschaft in Gewässernähe, damit viele Nährstoffe ins Gewässer kommen","Unterschiedliche und vielfältige Lebensräume","Harte Uferverbauungen, damit keine Pestizide ins Gewässer kommen"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"waters","topicTitle":"Lebensräume & Gewässerkunde","image":null,"answer":1},{"id":58,"question":"Welcher Zusammenhang besteht zwischen Sauerstoffgehalt im Wasser und Wassertemperatur?","options":["Im Wasser ist immer gleich viel Sauerstoff gelöst – bei jeder Temperatur","Je wärmer das Wasser, umso weniger Sauerstoff ist darin gelöst","Je wärmer das Wasser, umso mehr Sauerstoff ist darin gelöst"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"waters","topicTitle":"Lebensräume & Gewässerkunde","image":null,"answer":1},{"id":59,"question":"Welcher Zusammenhang besteht in der Regel zwischen Nährstoffund Sauerstoffkonzentration? Aquatische Lebensgemeinschaft / Nahrungskett","options":["Nährstoffarme (oligotrophe) Seen haben mehr Sauerstoff als nährstoffreiche (eutrophe) Seen","Nährstoffarme (oligotrophe) Seen haben weniger Sauerstoff als nährstoffreiche (eutrophe) Seen","Es gibt keinen Zusammenhang zwischen Nährstoffen und Sauerstoff e"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"waters","topicTitle":"Lebensräume & Gewässerkunde","image":null,"answer":0},{"id":60,"question":"Welche Organismen der Nahrungskette gehören zu den Produzenten?","options":["Wasserpflanzen","Schnecken","Fische"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"waters","topicTitle":"Lebensräume & Gewässerkunde","image":null,"answer":0},{"id":61,"question":"Fressen Fische in allen Jahreszeiten ungefähr gleich viel?","options":["Normalerweise fressen sie im Winter mehr, weil sie in kaltem Wasser mehr Energie brauchen um sich warm zu halten","Ja","Normalerweise fressen sie im Winter weniger, weil sie in kaltem Wasser weniger aktiv sind und deshalb weniger Energie brauchen"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"waters","topicTitle":"Lebensräume & Gewässerkunde","image":null,"answer":2},{"id":62,"question":"In welcher Grösse kommen Fische in einem natürlichen Gewässer am häufigsten vor?","options":["Es gibt in allen Grösseklassen gleichviele Fische","Es gibt am meisten ausgewachsene und grosse Fische","Es gibt am meisten kleine Jungfische"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"waters","topicTitle":"Lebensräume & Gewässerkunde","image":null,"answer":2},{"id":63,"question":"Wer ist in der Regel für eine angemessene Bewirtschaftung verantwortlich?","options":["Die kantonalen Fischereifachstellen","Das Bundesamt für Veterinärwesen","Das Bundesamt für Umwelt"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":0},{"id":64,"question":"Welche Grösse von Besatztieren verspricht in der Regel den besten Erfolg?","options":["Wenige und teurere, aber dafür grosse Fische","Ein den Verhältnissen angepasster Anteil Brütlinge und Sömmerlinge","Grosse Mengen billige Brütlinge und Sömmerlinge"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":1},{"id":65,"question":"Was bedeutet der Ausdruck «die Fische laichen»?","options":["Die Fische legen ihre Eier ab","Die Fische fressen aktiv","Die Fische sterben"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":0},{"id":66,"question":"Wie sollten Elterntiere für die Aufzucht von Besatzfischen ausgewählt werden?","options":["Möglichst wenige, dafür sehr grosse Fische wählen","Spielt keine Rolle","Die Elterntiere sollten möglichst zahlreich sein und aus dem Gewässer stammen, wo die Besatzfische eingesetzt werden"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":2},{"id":67,"question":"Woher stammt das «optimale» Elterntier zur Aufzucht von Besatzfischen?","options":["Zwecks «Blutauffrischung» aus fremden Gewässern","Um lokale Anpassungen nicht zu gefährden aus dem Gewässer, in das die Besatzfische eingesetzt wird","Um Geld zu sparen aus der Fischzucht mit den günstigsten Preisen"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":1},{"id":68,"question":"Was sollen Schonmassnahmen vor allem bezwecken?","options":["Schutz der Jungfische","Förderung sportlicher Fangmethoden","Schutz kranker Fische"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":0},{"id":69,"question":"Was geschieht in einem Schongebiet mit dem Fischbestand?","options":["Die grossen Fische nehmen überhand","Es stellt sich ein Gleichgewicht ein","Der Fischbestand steigt ständig an"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":1},{"id":70,"question":"Was wird mit einer Fangzahlbeschränkung hauptsächlich erreicht?","options":["Eine gerechtere Verteilung der Fänge","Eine Erhöhung des Fischbestands","Ein wirksamer Schutz der Laichtiere"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":0},{"id":71,"question":"Worauf sind die Schonzeiten ausgerichtet","options":["Auf die Laichzeiten der Fische","Auf die Jahreszeiten","Auf die Bedürfnisse der Angler"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":0},{"id":72,"question":"Wieso gibt es Fangmindestmasse?","options":["Damit jeder Fisch mindestens einmal Laichen kann, bevor er entnommen wird","Weil es schwieriger ist, kleine Fische zu filetieren","Um den Fangertrag unter den Fischern besser zu verteilen"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":0},{"id":73,"question":"Findet man bei chronischen Gewässerschädigungen immer tote Fische?","options":["Ja, dies sind untrügliche Anzeichen","Nicht unbedingt","Nein, das ist nie der Fall"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":1},{"id":74,"question":"Welche Massnahmen sind bei Fischsterben und Gewässerschädigungen zu treffen?","options":["Alarm, Beweissicherung","Stauen, Abfischen, Beweissicherung","Alarm, Gifteinfluss ableiten, Frischwasserzufuhr"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":0},{"id":75,"question":"Welche Stellen sind bei Fischsterben und Gewässerschädigungen in der Regel zu alarmieren?","options":["Fischereiaufsicht und Polizei","Pächter bzw. Vereinspräsident","Bundesamt für Umwelt"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":0},{"id":76,"question":"Welcher Begriff bezeichnet eine Gewässeraufwertung?","options":["Uferverbauung","Revitalisierung","Sohlenverbauung"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":1},{"id":77,"question":"Wie können vielfältige Fischbestände erfahrungsgemäss am Besten unterstützt werden?","options":["Mit viel Besatz","Mit Revitalisierungen","Indem gebietsfremde Arten eingeführt werden"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":1},{"id":78,"question":"Welches Problem wird durch die Wasserkraftnutzung mitverursacht?","options":["Es gibt zu wenig lockeres Geschiebe, weil es in Stauhaltungen liegen bleibt","Keines","Es gibt zu viel Geschiebe"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":0},{"id":79,"question":"Weshalb wurden in der Schweiz so viele Fliessgewässer kanalisiert und begradigt?","options":["Zwecks Landgewinn für Landwirtschaft-, Industrieund Siedlungsflächen","Um bessere Lebensbedingungen für Fische zu schaffen","In der Schweiz gibt es fast keine kanalisierten und begradigten Fliessgewässer"],"category":"ecology","categoryTitle":"Gewässer, Arten & Ökologie","topic":"management","topicTitle":"Besatz, Schonung & Gewässerschutz","image":null,"answer":0},{"id":80,"question":"Welcher Knoten wird verwendet, um zwei Schnüre zu verbinden?","options":["Uni-Knoten","Chirurgen-Knoten","Clinch-Knoten"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":1},{"id":81,"question":"Welche Funktion erfüllt der Zapfen?","options":["Standortbezeichnung gegenüber anderen Fischern","Lockmittel für Fische","Bissanzeiger"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":2},{"id":82,"question":"Welche Fischarten beangelt man vorwiegend beim Grundfischen?","options":["Karpfen, Schleien, Weissfische","Köderfische","Raubfische"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":0},{"id":83,"question":"Was dient normalerweise zur Beschwerung beim Grundfischen?","options":["Ein Laufzapfen","Ein durchbohrtes Stück Blei (Laufblei)","Ein rundes Klemmblei"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":1},{"id":84,"question":"Wie wird ein Spinnköder angeboten?","options":["Man setzt ihn auf den Grund","Man lässt ihn im Wasser spielen","Man kombiniert ihn mit einem Laufzapfen"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":1},{"id":85,"question":"Für welche Fischarten wird die Schleppfischerei angewendet?","options":["Raubfische","Weissfische","Karpfenartige"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":0},{"id":86,"question":"Welchen Fischen wird vor allem mit der Hegene nachgestellt?","options":["Felchen und Egli","Hechten und Forellen","Karpfen und Schleien"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":0},{"id":87,"question":"Wann müssen Fischerboote mit einem weissen Ball gekennzeichnet werden?","options":["Beim Spinnfischen","Beim Hegenen","Beim Schleppen"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":2},{"id":88,"question":"Welche ist die Hauptnahrung von Weissfischen?","options":["Kleinlebewesen, Wasserpflanzen, Algen","Kleine Fische","Teigwaren, Boilies u.a."],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":0},{"id":89,"question":"Warum soll Kunstködern grundsätzlich der Vorzug gegeben werden?","options":["Sie sind preisgünstiger","Sie sind fängiger","Sie werden von den Fischen weniger tief geschluckt und vermeiden Verletzungen"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":2},{"id":90,"question":"Was fressen Raubfische mit Vorliebe?","options":["Algene","kleine Fische","Gummiköder"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":1},{"id":91,"question":"Wie heisst der Sammelbegriff für Löffel, Spinner, Wobbler, Twister und bestimmte Systeme?","options":["Spinnköder","Metallköder","Hartköder"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":0},{"id":92,"question":"Mit welchem Köder wird auf der Wasseroberfläche gefischt?","options":["Trockenfliege","Nymphe","Streamer"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":0},{"id":93,"question":"Was versteht man unter einem Streamer?","options":["Imitation eines Insekts","Imitation einer Nymphe","Imitation eines Fischchens"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":2},{"id":94,"question":"Was ist eine Nymphe?","options":["Eine Insektenlarve","Ein kleines Fischchen","Ein Wasserwurm"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":0},{"id":95,"question":"Wie werden die Fischereiutensilien ausgewählt?","options":["Es kann überall mit den gleichen Angelgeräten gefischt werden","Sie werden dem Gewässertyp und der Fischart angepasst","Sie müssen neu gekauft sein"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":1},{"id":96,"question":"Warum sollte man nicht allzu dünne Schnüre verwenden?","options":["Dünne Schnüre erhöhen das Verlustrisiko beim Drill","Dünne Schnüre sind teurer als dickere","Mit dünneren Schnüren kann man keine Knoten machen"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":0},{"id":97,"question":"Kommt es darauf an, welche Knoten gemacht werden?","options":["Ja, gute Knoten haben eine höhere Festigkeit und lösen sich nicht von selbst","Nein, alle Knoten sind gleich stark","Nein, wenn man jeden Knoten doppelt macht"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":0},{"id":98,"question":"Was gehört neben Rute und Rolle zur Ausrüstung?","options":["Feumer, Zange / Hakenlöser, scharfes Messer / Schere, Massband, Fischbetäuber","Auf den Fischbetäuber kann verzichtet werden, man kann auch mit einem Stein betäuben","Wer den Kiemengriff beherrscht, kann auf den Feumer verzichten"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":0},{"id":99,"question":"Wer darf Widerhaken verwenden?","options":["Fischer über 40 Jahren","Fischer mit SaNa-Ausweis (Sachkundenachweis Fischerei), dort wo es die kantonalen Vorschriften ausdrücklich erlauben","Fischer unter 20 Jahren"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":1},{"id":100,"question":"Was ist das für eine Rute?","options":["Wurfrute / Spinnrute","Teleskoprute","Fliegenrute"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":"images/frage100.png","answer":0},{"id":101,"question":"Was ist das für eine Rute?","options":["Wurfrute / Spinnrute","Teleskoprute","Fliegenrute"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":"images/frage101.png","answer":1},{"id":102,"question":"Welche Rolle ist hier abgebildet?","options":["Stationärrolle / Wurfrolle","Laufrolle","Multirolle"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":"images/frage102.png","answer":0},{"id":103,"question":"Welcher künstliche Köder ist hier abgebildet?","options":["Spinner","Löffel","Wobbler"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":"images/frage103.png","answer":0},{"id":104,"question":"Welcher künstliche Köder ist hier abgebildet?","options":["Twister","Nymphe","Streamer"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":"images/frage104.png","answer":0},{"id":105,"question":"Wie heisst dieser künstliche Köder?","options":["Spinner","Löffel","Wobbler"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":"images/frage105.png","answer":2},{"id":106,"question":"Was tue ich mit einer alten, nicht mehr brauchbaren Angelschnur am Wasser?","options":["Liegen lassen, sie löst sich an der Sonne auf","Im Bachbett vergraben","Mitnehmen und sachgerecht entsorgen"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":2},{"id":107,"question":"Warum sollte man immer ein Vorfach verwenden, welches dünner ist als die Hauptschnur?","options":["Weil es der Fisch weniger sehen kann","Weil sich unterschiedliche Durchmesser besser knüpfen lassen","Weil beim Abreissen ein kurzes, dünneres Vorfach den Fisch weniger gefährdet und somit die Überlebenschance des Fischs steigt"],"category":"gear","categoryTitle":"Methoden & Geräte","topic":"methods","topicTitle":"Fischereimethoden & Geräte","image":null,"answer":2},{"id":108,"question":"Die Tierschutzbestimmungen gelten:","options":["Nur für geschützte Tierarten","Nur für Salmoniden","Für alle Fischarten"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":2},{"id":109,"question":"Wer besitzt grundsätzlich die Fischereihoheit in der Schweiz?","options":["Die Bezirk","Die Kantone","Der Bund"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":110,"question":"Worin werden die wichtigsten Belange der Fischerei in der Schweiz geregelt?","options":["Im Gewässerschutzgesetz","In der Bundesverfassung","Im Bundesgesetz über die Fischerei"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":2},{"id":111,"question":"Was zeichnet gute Fischer aus?","options":["Mit teurer Ausrüstung möglichst viel Beute machen","Ein waidmännischer und tierschutzgerechter Umgang mit dem Fisch","Sie setzen sich nicht für Hege und Pflege ein"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":112,"question":"Warum sind nicht einheimische (invasive) Fischarten nicht erwünscht?","options":["Weil sie schwieriger zu fangen sind","Sie können bei starker Vermehrung die einheimischen Arten gefährden","Sie sind nicht essbar"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":113,"question":"Warum sollte man eine der Zielfischart angepasste Angelschnur verwenden?","options":["Vernünftige Schnurstärken erlauben einen kurzen, schonenden Drill","Zu dicke Schnüre führen zu einem übermässig langen Drill","Weil gewisse Fischarten nicht beissen, wenn man eine zu dünne Schnur verwendet"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":0},{"id":114,"question":"Du fängst an deiner Stelle in kurzer Zeit mehrere untermassige Fische. Was solltest du tun?","options":["Einen neuen Platz suchen, da ich offensichtlich ein Jungfischhabitat befische","Weiterfischen – wo es kleine hat, sind auch grössere","Einen grösseren Köder verwenden"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":0},{"id":115,"question":"Nach welchen Kriterien wird ein geeigneter Angelplatz ausgewählt?","options":["Je weiter vom Wasser weg man stehen kann (z.B. Brücke) desto besser, da der Fisch einen so nicht sieht","Gute Anlandemöglichkeiten, kein bevorzugter Lebensraum von Jungfischen","Es gibt keine speziellen Kriterien für geeignete Angelplätze"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":116,"question":"Warum muss beim Fischen mit natürlichem Köder der Anbiss sofort mit einem Anschlag quittiert werden?","options":["Weil Gefahr besteht, dass er den Köder wieder ausspuckt","Weil Gefahr besteht, dass er den Köder verschluckt und das Hakenlösen schwierig wird","Spielt keine Rolle"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":117,"question":"Warum soll die Drilldauer kurz gehalten werden?","options":["Um den Fisch nicht in einen gefährlichen Erschöpfungszustand mit Sauerstoffmangel zu bringen","Um die Reissfestigkeit der Angelschnur nicht zu gefährden","Um mehr Beute zu machen"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":0},{"id":118,"question":"Was tun, wenn der Haken bei einem untermassigen oder geschonten Fisch tief sitzt oder geschluckt wurde?","options":["Den Fisch in jedem Fall töten","Das Vorfach so kurz wie möglich abschneiden","Den Haken sorgfältig herausoperieren"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":119,"question":"Wodurch wird die empfindliche Haut vieler Fischarten geschützt?","options":["Nur durch die Schuppen","Durch die Schuppen und die darüber liegende Schleimschicht","Die Fischhaut ist robust und braucht keinen Schutz"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":120,"question":"Wie wird der Fisch zum Lösen des Hakens in die Hand genommen?","options":["Bauch in die hohle, gut angenetzte Hand, Finger auf den Rücken","Rücken in die hohle, gut angenetzte Hand, Finger auf den Bauch","Spielt keine Rolle, so wie es gerade am besten geht"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":0},{"id":121,"question":"Wie gehe ich vor, wenn ich den gefangenen Fisch entnehmen kann?","options":["Fisch anlanden, vom Haken lösen und töten","Fisch anlanden, betäuben, töten, vom Haken lösen","Fisch anlanden, nochmals messen, dann töten"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":122,"question":"Wie wird ein Fisch richtig getötet?","options":["Aus dem Wasser nehmen, ans Ufer legen und Schlag auf den Kopf","Mit Kopfschlag betäuben, dann Durchtrennen des Hauptblutgefässes (Entbluten) oder sofortiges Ausnehmen","Aus dem Wasser ziehen und sofort Kiemen schnitt machen"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":123,"question":"Reicht ein Schlag auf den Kopf, um einen Fisch korrekt zu töten?","options":["Ja, wenn man mindestens 3-mal auf den Kopf des Fischs schlägt","Meistens, aber manchmal bewegt er sich noch, dann braucht es zusätzliche Schläge","Nein, um den Fisch sicher zu töten, braucht es zusätzlich zur Betäubung das Durchtrennen des Hauptblutgefässes (Entbluten) oder sofortiges Ausnehmen"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":2},{"id":124,"question":"Wie werden lebende Fische kurzfristig richtig gehältert?","options":["In genügend grossen Behältern mit ausreichender Sauerstoffversorgung","In einem gut durchnässten Tuch","In einem mit Wasser gefüllten Plastiksack"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":0},{"id":125,"question":"Wie lange darf ein SaNa-Inhaber gefangene Fische hältern?","options":["2 Stunden","Maximal bis zum Ende des Anglerausflugs","3 Wochen"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":126,"question":"Wie halte ich meinen Fang frisch?","options":["Das geht nur, wenn ich die Fische lebend hältere","Sofort ausnehmen, dann möglichst kühl lagern","In einen Plastiksack legen"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":127,"question":"Wie gehe ich beim Messen eines knapp massigen Fisches vor?","options":["Der Fisch wird so lange festgehalten, bis er ruhig liegt – dann messen","Mehrmals messen, denn das bringt eine höhere Messgenauigkeit","Den Fisch im Wasser messen und im Zweifelsfall sofort wieder zurücksetzen"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":2},{"id":128,"question":"Müssen sich Fischer an privaten Gewässern auch an die Bundes- und Kantonale Gesetzgebung halten?","options":["Ja, diese haben auch für private Gewässer Gültigkeit","Nein, bei privaten Gewässern gelten eigene Vorschriften","Nein, hier gilt lediglich die Bundesgesetzgebung"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":0},{"id":129,"question":"Welche Fischart ist in der Schweiz das ganze Jahr geschützt?","options":["Regenbogenforelle","Nase","Äsche"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":130,"question":"Warum wurde die Verwendung von Angeln mit Widerhaken verboten? (Kantonale Ausnahmen für SaNa-Ausweisinhaber)","options":["Auf Anraten der Weltgesundheitsorganisation (WHO)","Beim Lösen von Angeln mit Widerhaken besteht eine grosse Verletzungsgefahr für den Fisch","Weil Angeln mit Widerhaken den Fischer auch selber schwer verletzen kann"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":131,"question":"Wann dürfen massige Fische wieder zurückgesetzt werden?","options":["Wenn sie mit dieser Absicht gefangen wurden","Aus ökologischen Gründen","Wenn sie zu gross sind für die Pfanne"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":132,"question":"Wie setzt man untermassige Fische zurück?","options":["Möglichst schnell Haken lösen und zurückwerfen","Gar nicht, in der Schweiz gibt es ein Entnahmegebot","Möglichst noch im Wasser den Haken vorsichtig entfernen, dann sorgfältig mit dem Kopf gegen die Strömung ins Wasser halten, bis der Fisch sich erholt hat und selbst davonschwimmt"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":2},{"id":133,"question":"Warum darf nie Druck auf den Fischkörper ausgeübt werden?","options":["Um die empfindlichen inneren Organe nicht zu verletzen","Um die Galle nicht auszuquetschen","Um die Atmung nicht zu behindern"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":0},{"id":134,"question":"Muss mit Fischen gleich sorgfältig umgegangen werden, wie mit anderen Wirbeltieren?","options":["Nein, denn es sind kaltblütige Tiere","Ja, es ist dieselbe Sorgfalt angebracht","Das liegt im Ermessen des einzelnen Fischers"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":135,"question":"Wer darf als Fischer Fische lebend hältern?","options":["Jeder Patent-Inhaber","Jeder SaNa-Inhaber, wo es die kantonalen Vorschriften gestatten","Jeder Fischer, wo es die kantonalen Vorschriften gestatten"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":136,"question":"Darf man lebende Köderfische verwenden?","options":["Niemals","Nur wenn man einen SaNa-Ausweis hat und nur dort wo es die kantonalen Vorschriften ausdrücklich erlauben","Immer, wenn man Raubfische beangelt"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":137,"question":"Welche Rechtsvorschrift muss ich unbedingt konsultieren, bevor ich an einem Gewässer mit Fischen beginne?","options":["Die Bundesverfassung","Das eidgenössische Fischereigesetz","Die gültigen kantonalen Vorschriften"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":2},{"id":138,"question":"Was ist zu tun, bevor man einen gehakten Fisch anfasst?","options":["Die Hand mit Wasser benetzen","Die Hand mit Sand rau machen","Die Hand mit Desinfektionsmittel einreiben"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":0},{"id":139,"question":"Was muss beim Fotografieren von lebenden Fischen beachtet werden?","options":["Fische dürfen nur tot fotografiert werden","Man fotografiert möglichst weit vom Wasser weg","Man fotografiert möglichst im Wasser oder mit nur kurzem Herausheben in normaler Schwimmlage"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":2},{"id":140,"question":"Warum müssen Fische, die zurückzusetzen sind, möglichst schonend behandelt werden?","options":["Damit keine Busse riskiert wird","Weil der Fisch ein empfindliches Lebewesen ist und nur korrekt behandelte Fische überleben","Damit die Fleischqualität nicht abnimmt"],"category":"law","categoryTitle":"Gesetzgebung & Tierschutz","topic":"welfare","topicTitle":"Gesetzgebung & Tierschutz","image":null,"answer":1},{"id":141,"question":"Warum soll der gefangene Fisch nach dem Töten so rasch wie möglich ausgenommen werden?","options":["Damit er nicht mehr wegschwimmen kann","Die verwesenden Innereien verbreiten den unangenehmen Geruch und schaden der Fleischqualität","Weil man die Innereien nicht essen soll"],"category":"food","categoryTitle":"Fisch als Nahrungsmittel","topic":"nutrition","topicTitle":"Fisch als Nahrungsmittel","image":null,"answer":1},{"id":142,"question":"Worauf muss beim Aufschneiden der Bauchdecke besonders geachtet werden?","options":["Dass ich die Schleimschicht nicht verletze","Dass die Gallenblase nicht angestochen / aufgeschnitten wird um die Fleischqualität nicht zu vermindern","Dass die Innereien nicht herausfallen"],"category":"food","categoryTitle":"Fisch als Nahrungsmittel","topic":"nutrition","topicTitle":"Fisch als Nahrungsmittel","image":null,"answer":1},{"id":143,"question":"Wie bewahre ich den ausgenommenen Fisch auf, während ich weiter fische?","options":["Im Plastiksack","Im trockenen oder nassfeuchten Tuch oder im Fischkorb und achte auf Schatten oder Kühlung","Lege ihn ins Gras"],"category":"food","categoryTitle":"Fisch als Nahrungsmittel","topic":"nutrition","topicTitle":"Fisch als Nahrungsmittel","image":null,"answer":1},{"id":144,"question":"Was geschieht mit sachgemäss tiefgefrorenem Fisch bei zu langer Lagerdauer?","options":["Das Fischfleisch trocknet langsam aus und wird ungeniessbar","Tiefgekühlt kann Fisch beliebig lange gelagert werden","Bei Tiefkühllagerung verfärbt sich der Fisch nach langer Lagerung, bleibt aber geniessbar"],"category":"food","categoryTitle":"Fisch als Nahrungsmittel","topic":"nutrition","topicTitle":"Fisch als Nahrungsmittel","image":null,"answer":0},{"id":145,"question":"Woran erkennt man, dass ein Fisch verdorben ist?","options":["Die Schleimschicht ist ausgetrocknet","Der Bauchhöhle entweicht unangenehmer Geruch und die Augen sind trübe / matt","Ich kann den Zustand des Fischs nur an den Kiemen beurteilen"],"category":"food","categoryTitle":"Fisch als Nahrungsmittel","topic":"nutrition","topicTitle":"Fisch als Nahrungsmittel","image":null,"answer":1},{"id":146,"question":"Können alle Fischarten gleich lange tiefgekühlt gelagert werden?","options":["Nein, fettreiche Fische sind weniger lang lagerfähig als fettarme Fische","Fettreiche Fische können länger gelagert werden als fettarme Fische","Fettreiche oder fettarme Fische können gleich lang gelagert werden"],"category":"food","categoryTitle":"Fisch als Nahrungsmittel","topic":"nutrition","topicTitle":"Fisch als Nahrungsmittel","image":null,"answer":0},{"id":147,"question":"Worauf muss beim Auftauen der Fische geachtet werden?","options":["Den Fisch im Kühlschrank abgedeckt (Fremdgerüche) langsam auftauen und sicherstellen, dass der Fisch nicht im Tauwasser liegt","Den Fisch im lauwarmen Wasser langsam auftauen","Den Fisch abgedeckt in der Küche über Nacht auftauen"],"category":"food","categoryTitle":"Fisch als Nahrungsmittel","topic":"nutrition","topicTitle":"Fisch als Nahrungsmittel","image":null,"answer":0},{"id":148,"question":"Worauf muss beim Einfrieren von Fisch (Lebensmitteln) geachtet werden?","options":["Der Tiefkühlbeutel darf keine Risse / Löcher aufweisen und muss den Fisch luftdicht umschliessen, rasch einfrieren, Einfrierdatum auf Packung notieren","Den Fisch in dünne Haushaltfolie wickeln und sofort in den Tiefkühler legen","Den Fisch in Haushaltpapier wickeln und in den Tiefkühler legen"],"category":"food","categoryTitle":"Fisch als Nahrungsmittel","topic":"nutrition","topicTitle":"Fisch als Nahrungsmittel","image":null,"answer":0},{"id":149,"question":"Weissfischfilets enthalten noch feine Gräten. Wie kann das Fleisch dennoch genussbereit gemacht werden?","options":["Filets in kleine Stücke schneiden und Gräten mit Pinzette herauszupfen oder Hackfleisch machen","Weil Weissfische grätenreich sind, nie Weissfische entnehmen","Weissfische kann man wegen den Gräten nicht essen"],"category":"food","categoryTitle":"Fisch als Nahrungsmittel","topic":"nutrition","topicTitle":"Fisch als Nahrungsmittel","image":null,"answer":0},{"id":150,"question":"Welche Merkmale weisen darauf hin, dass ein Speisefisch frisch ist?","options":["Intensiver oder unangenehmer Geruch, trockene Haut, verfärbte Kiemen","Intensiver oder unangenehmer Geruch, verfärbte Haut, verklebte Kiemen","Frischer Geruch, glänzende und feuchte Augen, rote Kiemen"],"category":"food","categoryTitle":"Fisch als Nahrungsmittel","topic":"nutrition","topicTitle":"Fisch als Nahrungsmittel","image":null,"answer":2}];
    const DEFAULT_IMAGE_FILES = ["zander1.png","karpfen1.png","hecht1.png","barbe1.png","nase1.png","schleie1.png","felche1.png","truesche1.png","brachsmen1.png","rotauge1.png","barbe2.png","rotfeder1.png","egli1.png","regenbogenforelle1.png","aesche1.png","bachforelle1.png","seeforelle1.png","frage100.png","frage101.png","frage102.png","frage103.png","frage104.png","frage105.png"];
    const IMAGE_EXTENSIONS = /\.(png|jpe?g|webp|gif)$/i;
    let imageLibrary = buildImageLibrary(DEFAULT_IMAGE_FILES);

    const TOPICS = [
      { slug: "identify", title: "Fische erkennen", count: 17, icon: "🐟" },
      { slug: "species", title: "Arten, Schutz & Vielfalt", count: 14, icon: "🌿" },
      { slug: "biology", title: "Biologie & Gesundheit", count: 22, icon: "🫀" },
      { slug: "waters", title: "Lebensräume & Gewässer", count: 9, icon: "🌊" },
      { slug: "management", title: "Besatz, Schonung & Schutz", count: 17, icon: "🌱" },
      { slug: "methods", title: "Methoden & Geräte", count: 28, icon: "🎣" },
      { slug: "welfare", title: "Gesetz & Tierschutz", count: 33, icon: "⚖️" },
      { slug: "nutrition", title: "Fisch als Lebensmittel", count: 10, icon: "🍽️" }
    ];

    const CATEGORIES = [
      { slug: "fish", title: "Fischkunde" },
      { slug: "ecology", title: "Gewässer, Arten & Ökologie" },
      { slug: "gear", title: "Methoden & Geräte" },
      { slug: "law", title: "Gesetzgebung & Tierschutz" },
      { slug: "food", title: "Fisch als Nahrungsmittel" }
    ];

    const app = document.getElementById("app");
    const letters = ["A", "B", "C"];
    let stats = loadStats();
    let state = freshState();

    function freshState() {
      return { screen: "home", mode: null, session: [], index: 0, answers: {}, revealed: false, title: "", questionImages: {} };
    }

    function escapeHtml(value) {
      return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function loadStats() {
      try { return JSON.parse(localStorage.getItem("sana-trainer-stats") || "{}"); }
      catch (_) { return {}; }
    }

    function saveStats() {
      try { localStorage.setItem("sana-trainer-stats", JSON.stringify(stats)); }
      catch (_) { /* Die App funktioniert auch ohne gespeicherten Lernstand. */ }
    }

    function shuffle(items) {
      const copy = [...items];
      for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    function normaliseImageName(value) {
      return String(value)
        .toLowerCase()
        .replaceAll("ä", "ae")
        .replaceAll("ö", "oe")
        .replaceAll("ü", "ue")
        .replaceAll("ß", "ss")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\.[^.]+$/, "")
        .replace(/[^a-z0-9]/g, "");
    }

    function buildImageLibrary(fileNames) {
      const library = {};
      const fishKeys = [...new Set(QUESTIONS.filter(q => q.imageKey).map(q => q.imageKey))];
      for (const key of fishKeys) {
        library[key] = fileNames.filter(fileName =>
          IMAGE_EXTENSIONS.test(fileName) && normaliseImageName(fileName).includes(key)
        );
      }
      return library;
    }

    function githubRepository() {
      const host = window.location.hostname.toLowerCase();
      if (!host.endsWith(".github.io")) return null;
      const owner = host.slice(0, -".github.io".length);
      const pathParts = window.location.pathname.split("/").filter(Boolean);
      return { owner, repo: pathParts[0] || `${owner}.github.io` };
    }

    async function discoverImageFiles() {
      const repository = githubRepository();
      if (!repository) return;
      try {
        const endpoint = `https://api.github.com/repos/${encodeURIComponent(repository.owner)}/${encodeURIComponent(repository.repo)}/contents/images`;
        const response = await fetch(endpoint, { headers: { Accept: "application/vnd.github+json" } });
        if (!response.ok) return;
        const entries = await response.json();
        if (!Array.isArray(entries)) return;
        const discovered = entries
          .filter(entry => entry.type === "file" && IMAGE_EXTENSIONS.test(entry.name))
          .map(entry => entry.name);
        imageLibrary = buildImageLibrary([...new Set([...DEFAULT_IMAGE_FILES, ...discovered])]);
      } catch (_) {
        /* Die mitgelieferten Grundbilder bleiben bei fehlender Verbindung verfügbar. */
      }
    }

    function imagePath(fileName) {
      return `images/${fileName.split("/").map(encodeURIComponent).join("/")}`;
    }

    function chooseQuestionImage(question) {
      if (!question.imageKey) return question.image || null;
      const candidates = imageLibrary[question.imageKey] || [];
      if (!candidates.length) return question.image || null;
      const previous = state.questionImages[question.id];
      const available = candidates.length > 1
        ? candidates.filter(fileName => imagePath(fileName) !== previous)
        : candidates;
      return imagePath(available[Math.floor(Math.random() * available.length)]);
    }

    function score() {
      const correct = state.session.filter(q => state.answers[q.id] === q.answer).length;
      return { correct, wrong: state.session.length - correct };
    }

    function renderHome() {
      state.screen = "home";
      app.innerHTML = `
        <section class="hero">
          <div class="hero-copy">
            <p class="eyebrow">Vollständiger Fragenkatalog 1–150</p>
            <h1>Erkennen. Verstehen. Sicher bestehen.</h1>
            <p class="lead">Übe gezielt nach Themen oder simuliere die SaNa-Erfolgskontrolle mit 50 zufällig ausgewählten Multiple-Choice-Fragen.</p>
            <div class="facts" aria-label="Prüfungsanforderungen">
              <span class="fact"><strong>50</strong> Fragen</span>
              <span class="fact"><strong>40</strong> richtig</span>
              <span class="fact"><strong>80 %</strong> nötig</span>
            </div>
          </div>
          <aside class="exam-card">
            <span class="exam-icon" aria-hidden="true">📋</span>
            <p class="eyebrow">Prüfungsmodus</p>
            <h2>Bereit für den Test?</h2>
            <p>Während der Prüfung werden keine Lösungen angezeigt. Ergebnis und Fehleranalyse erscheinen erst am Schluss.</p>
            <button class="btn btn-light btn-wide" type="button" data-action="start-exam">Prüfung starten →</button>
            <small>50 zufällige Fragen aus dem Gesamtpool</small>
          </aside>
        </section>

        <section class="learn" aria-labelledby="learn-title">
          <div class="section-head">
            <div><p class="eyebrow">Lernmodus</p><h2 id="learn-title">Was möchtest du üben?</h2></div>
            <p>Wähle ein Thema. Nach jeder Antwort siehst du sofort die richtige Lösung.</p>
          </div>
          <div class="topic-grid">
            ${TOPICS.map(topic => {
              const item = stats[topic.slug];
              const accuracy = item && item.attempted ? Math.round(item.correct / item.attempted * 100) : null;
              return `<button class="topic" type="button" data-action="start-learn" data-topic="${topic.slug}">
                <span class="topic-icon" aria-hidden="true">${topic.icon}</span>
                <strong>${escapeHtml(topic.title)}</strong>
                <small>${topic.count} Fragen</small>
                <span class="topic-progress">${accuracy === null ? "STARTEN →" : `${accuracy} % RICHTIG →`}</span>
              </button>`;
            }).join("")}
          </div>
        </section>

        <aside class="source">
          <span class="source-icon" aria-hidden="true">📖</span>
          <div><strong>Fragenbasis und echter Prüfungsmodus</strong>
            <p>Enthalten sind alle 150 Fragen des bereitgestellten Katalogs (2020). Gemäss <a href="https://www.anglerausbildung.ch/erfolgskontrolle" target="_blank" rel="noreferrer">Netzwerk Anglerausbildung</a> werden 50 Fragen zufällig ausgewählt; bestanden ist die Prüfung ab 40 richtigen Antworten. Eine feste Anzahl pro Kapitel wird öffentlich nicht angegeben.</p>
            <p><strong>Erweiterbare Fischbilder:</strong> Zusätzliche Fotos im Ordner <code>images</code> werden auf GitHub Pages automatisch erkannt. Der Dateiname enthält die Fischart, beispielsweise <code>hecht1.jpg</code>, <code>hecht2.png</code> oder <code>mein_hecht_jungfisch.webp</code>.</p>
          </div>
        </aside>`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function startLearning(topicSlug) {
      const topic = TOPICS.find(item => item.slug === topicSlug);
      if (!topic) return;
      state = {
        screen: "quiz",
        mode: "learn",
        session: shuffle(QUESTIONS.filter(q => q.topic === topicSlug)),
        index: 0,
        answers: {},
        revealed: false,
        title: topic.title,
        questionImages: {}
      };
      renderQuiz();
    }

    function startExam() {
      state = {
        screen: "quiz",
        mode: "exam",
        session: shuffle(QUESTIONS).slice(0, 50),
        index: 0,
        answers: {},
        revealed: false,
        title: "Prüfungsmodus",
        questionImages: {}
      };
      renderQuiz();
    }

    function renderQuiz() {
      const question = state.session[state.index];
      if (!question) { renderHome(); return; }
      const selected = state.answers[question.id];
      const isLearn = state.mode === "learn";
      const progress = Math.round((state.index + 1) / state.session.length * 100);
      const selectedImage = state.questionImages[question.id] || chooseQuestionImage(question);
      state.questionImages[question.id] = selectedImage;
      const image = selectedImage
        ? `<div class="fish-frame"><img src="${escapeHtml(selectedImage)}" alt="Abbildung zur Frage ${question.id}"></div>`
        : "";

      app.innerHTML = `<section class="quiz-wrap">
        <div class="quiz-bar">
          <button class="back" type="button" data-action="home">← Startseite</button>
          <span class="mode-pill">${isLearn ? "Lernmodus" : "Prüfungsmodus"}</span>
          <span class="progress-label">${state.index + 1} / ${state.session.length}</span>
        </div>
        <div class="progress-track" aria-label="Fortschritt"><div class="progress-fill" style="width:${progress}%"></div></div>

        <article class="quiz-card">
          <div class="question-head">
            <div class="question-meta">
              <span class="chip number">Frage ${question.id}</span>
              <span class="chip">${escapeHtml(question.topicTitle)}</span>
            </div>
            <h2>${escapeHtml(question.question)}</h2>
          </div>
          <div class="question-body">
            ${image}
            <div class="options" role="group" aria-label="Antwortmöglichkeiten">
              ${question.options.map((option, optionIndex) => {
                let className = "option";
                let mark = "";
                if (isLearn && state.revealed) {
                  if (optionIndex === question.answer) { className += " correct"; mark = "✓"; }
                  else if (optionIndex === selected) { className += " wrong"; mark = "×"; }
                } else if (selected === optionIndex) {
                  className += " selected";
                  mark = "●";
                }
                return `<button class="${className}" type="button" data-action="answer" data-answer="${optionIndex}" ${isLearn && state.revealed ? "disabled" : ""}>
                  <span class="option-letter">${letters[optionIndex]}</span>
                  <span class="option-text">${escapeHtml(option)}</span>
                  <span class="option-mark" aria-hidden="true">${mark}</span>
                </button>`;
              }).join("")}
            </div>

            ${isLearn && state.revealed ? `<div class="feedback ${selected === question.answer ? "correct" : "wrong"}">
              ${selected === question.answer ? "✓ Richtig beantwortet." : `✕ Noch nicht richtig. Die Lösung ist ${letters[question.answer]}.`}
            </div>` : ""}

            <div class="quiz-actions">
              <button class="btn btn-primary" type="button" data-action="next" ${selected === undefined ? "disabled" : ""}>
                ${state.index === state.session.length - 1 ? (state.mode === "exam" ? "Prüfung auswerten" : "Auswertung anzeigen") : "Nächste Frage →"}
              </button>
            </div>
            ${state.mode === "exam" ? '<p class="exam-note">Die Lösung wird erst nach der letzten Frage angezeigt.</p>' : ""}
          </div>
        </article>
      </section>`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function chooseAnswer(answerIndex) {
      const question = state.session[state.index];
      if (!question || (state.mode === "learn" && state.revealed)) return;
      state.answers[question.id] = answerIndex;
      if (state.mode === "learn") {
        state.revealed = true;
        const current = stats[question.topic] || { attempted: 0, correct: 0 };
        stats[question.topic] = {
          attempted: current.attempted + 1,
          correct: current.correct + (answerIndex === question.answer ? 1 : 0)
        };
        saveStats();
      }
      renderQuiz();
    }

    function nextQuestion() {
      const question = state.session[state.index];
      if (!question || state.answers[question.id] === undefined) return;
      if (state.index >= state.session.length - 1) renderResult();
      else {
        state.index += 1;
        state.revealed = false;
        renderQuiz();
      }
    }

    function renderResult() {
      state.screen = "result";
      const result = score();
      const isExam = state.mode === "exam";
      const passed = isExam && result.correct >= 40;
      const percent = Math.round(result.correct / state.session.length * 100);
      const mistakes = state.session.filter(q => state.answers[q.id] !== q.answer);

      const breakdown = CATEGORIES.map(category => {
        const subset = state.session.filter(q => q.category === category.slug);
        if (!subset.length) return "";
        const correct = subset.filter(q => state.answers[q.id] === q.answer).length;
        return `<div class="breakdown-item"><span>${escapeHtml(category.title)}</span><strong>${correct} / ${subset.length}</strong></div>`;
      }).join("");

      const title = isExam
        ? (passed ? "Prüfung bestanden!" : "Noch nicht bestanden")
        : "Thema abgeschlossen";
      const lead = isExam
        ? (passed ? "Du hast die erforderlichen 40 richtigen Antworten erreicht." : `Für das Bestehen fehlen dir noch ${Math.max(0, 40 - result.correct)} richtige Antworten.`)
        : `Du hast ${result.correct} von ${state.session.length} Fragen richtig beantwortet.`;

      app.innerHTML = `<section class="result-card">
        <div class="result-hero">
          <div class="score-ring"><span><strong>${percent} %</strong><small>${result.correct} von ${state.session.length}</small></span></div>
          <div>
            <p class="eyebrow">${isExam ? "Prüfungsauswertung" : escapeHtml(state.title)}</p>
            <h1 class="${isExam ? (passed ? "pass" : "fail") : ""}">${title}</h1>
            <p class="lead">${lead}</p>
          </div>
        </div>

        <div class="breakdown">
          <h3>Auswertung nach offiziellen Kapiteln</h3>
          <div class="breakdown-grid">${breakdown}</div>
        </div>

        <div class="result-actions">
          <button class="btn btn-primary" type="button" data-action="${isExam ? "start-exam" : "repeat-session"}">${isExam ? "Neue Prüfung" : "Thema wiederholen"}</button>
          ${mistakes.length ? '<button class="btn btn-ghost" type="button" data-action="retry-wrong">Fehler üben</button>' : ""}
          <button class="btn btn-ghost" type="button" data-action="home">Zur Startseite</button>
        </div>

        ${mistakes.length ? `<details>
          <summary>${mistakes.length} falsch beantwortete ${mistakes.length === 1 ? "Frage" : "Fragen"} anzeigen</summary>
          <div class="mistakes">${mistakes.map(q => `<div class="mistake">
            <strong>Frage ${q.id}: ${escapeHtml(q.question)}</strong>
            <p>Richtig: ${letters[q.answer]} – ${escapeHtml(q.options[q.answer])}</p>
          </div>`).join("")}</div>
        </details>` : ""}
      </section>`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function retryWrong() {
      const wrong = state.session.filter(q => state.answers[q.id] !== q.answer);
      if (!wrong.length) return;
      state = {
        screen: "quiz",
        mode: "learn",
        session: shuffle(wrong),
        index: 0,
        answers: {},
        revealed: false,
        title: "Fehler wiederholen",
        questionImages: {}
      };
      renderQuiz();
    }

    function repeatSession() {
      state = {
        ...state,
        screen: "quiz",
        session: shuffle(state.session),
        index: 0,
        answers: {},
        revealed: false,
        questionImages: {}
      };
      renderQuiz();
    }

    app.addEventListener("click", event => {
      const target = event.target.closest("[data-action]");
      if (!target) return;
      const action = target.dataset.action;
      if (action === "home") { state = freshState(); renderHome(); }
      else if (action === "start-learn") startLearning(target.dataset.topic);
      else if (action === "start-exam") startExam();
      else if (action === "answer") chooseAnswer(Number(target.dataset.answer));
      else if (action === "next") nextQuestion();
      else if (action === "retry-wrong") retryWrong();
      else if (action === "repeat-session") repeatSession();
    });

    document.querySelector(".header").addEventListener("click", event => {
      const target = event.target.closest('[data-action="home"]');
      if (target) { state = freshState(); renderHome(); }
    });

    renderHome();
    discoverImageFiles();
