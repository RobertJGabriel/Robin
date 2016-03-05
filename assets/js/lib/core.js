var app = angular.module('robin', []);
var osenv = require('osenv');
var ip = null;
var user = osenv.user();
var async = require('async');
var mrscraper = require("scraper-web");
require('getmac').getMac(function (err, macAddress) {
    ip = macAddress;
});

function ignoreerror() {
    return true
}
window.onerror = ignoreerror();
app.controller('controller', function ($scope) {

            var ref = new Firebase("https://projectbird.firebaseio.com");
            var authData = ref.getAuth();

            $scope.listOfProfanityWords = ["abbey" ,"brooks" ,"abused" ,"accidental" ,"anal" ,"creampie" ,"orgasm" ,"addison" ,"rose" ,"adriana" ,"nicole" ,"sage" ,"adrianna" ,"adult" ,"porn" ,"tube" ,"tubes" ,"you" ,"youtube" ,"african" ,"agent" ,"aladdin" ,"alanah" ,"rae" ,"alaura" ,"eden" ,"albino" ,"alektra" ,"blue" ,"aletta" ,"ocean" ,"alexa" ,"may" ,"alexis" ,"amor" ,"amore" ,"breeze" ,"love" ,"silver" ,"texas" ,"alice" ,"in" ,"wonderland" ,"alicia" ,"angel" ,"rhodes" ,"tyler" ,"alien" ,"allie" ,"sin" ,"allysin" ,"chaynes" ,"amateur" ,"allure" ,"blowjob" ,"bukkake" ,"couple" ,"cuckold" ,"cumshots" ,"gangbang" ,"handjob" ,"lesbian" ,"milf" ,"orgy" ,"porno" ,"sex" ,"videos" ,"swingers" ,"teen" ,"threesome" ,"wife" ,"amateurs" ,"gone" ,"wild" ,"amatoriale" ,"amatuer" ,"amature" ,"amazing" ,"ass" ,"deepthroat" ,"tits" ,"amazon" ,"amber" ,"lynn" ,"michaels" ,"rayne" ,"american" ,"pussy" ,"amputee" ,"amy" ,"reid" ,"ana" ,"nova" ,"accident" ,"asian" ,"beads" ,"blonde" ,"bondage" ,"casting" ,"compilation" ,"cream" ,"eating" ,"cum" ,"cumshot" ,"destruction" ,"dildo" ,"extreme" ,"fingering" ,"fisting" ,"fuck" ,"fucking" ,"gape" ,"granny" ,"hardcore" ,"hd" ,"hentai" ,"interracial" ,"lesbians" ,"licking" ,"massage" ,"mature" ,"pain" ,"party" ,"pov" ,"punishment" ,"queen" ,"squirt" ,"stretching" ,"surprise" ,"teens" ,"torture" ,"training" ,"video" ,"virgin" ,"anastasia" ,"christ" ,"andi" ,"anderson" ,"android" ,"anetta" ,"keys" ,"anette" ,"dawn" ,"dark" ,"eyes" ,"long" ,"angelica" ,"angelina" ,"crow" ,"valentine" ,"animal" ,"animated" ,"anime" ,"anita" ,"ann" ,"marie" ,"anna" ,"malle" ,"annette" ,"schwarz" ,"annie" ,"cruz" ,"april" ,"flowers" ,"arab" ,"cock" ,"arabic" ,"argentina" ,"aria" ,"giovanni" ,"ariana" ,"jollee" ,"art" ,"asa" ,"akira" ,"ashley" ,"ashli" ,"orion" ,"ashlynn" ,"brooke" ,"asia" ,"carrera" ,"bbw" ,"street" ,"meat" ,"to" ,"mouth" ,"xxx" ,"aubrey" ,"addams" ,"audition" ,"audrey" ,"bitoni" ,"hollander" ,"aunt" ,"aurora" ,"jolie" ,"snow" ,"austin" ,"kincaid" ,"ava" ,"devine" ,"lauren" ,"avena" ,"lee" ,"avy" ,"scott" ,"ayana" ,"babe" ,"babes" ,"babysitter" ,"backroom" ,"couch" ,"facials" ,"bang" ,"bus" ,"my" ,"bangbros" ,"bangbros.com" ,"bangbus" ,"barbie" ,"bathroom" ,"batman" ,"pissing" ,"bdsm" ,"beach" ,"beautiful" ,"beauty" ,"dior" ,"beeg" ,"behind" ,"the" ,"scenes" ,"belladonna" ,"best" ,"blow" ,"job" ,"ever" ,"free" ,"sites" ,"beurette" ,"bi" ,"bianca" ,"pureheart" ,"big" ,"asses" ,"black" ,"booty" ,"dick" ,"boobies" ,"boobs" ,"brother" ,"butts" ,"clit" ,"cocks" ,"dicks" ,"natural" ,"nipples" ,"lips" ,"tit" ,"at" ,"school" ,"titties" ,"bigboobs" ,"biggest" ,"bigtits" ,"bikini" ,"bisexual" ,"bizarre" ,"cunt" ,"gang" ,"gf" ,"girl" ,"milfs" ,"blackmail" ,"blacks" ,"on" ,"blondes" ,"bleach" ,"jobs" ,"blowjobs" ,"bobbi" ,"starr" ,"bollywood" ,"boner" ,"boss" ,"brandy" ,"talore" ,"taylor" ,"brazil" ,"brazilian" ,"brazzers" ,"brea" ,"bennett" ,"bree" ,"olsen" ,"briana" ,"banks" ,"brianna" ,"frost" ,"bride" ,"british" ,"britney" ,"spears" ,"stevens" ,"brittany" ,"andrews" ,"brittney" ,"skye" ,"broke" ,"straight" ,"boys" ,"banner" ,"haven" ,"hun" ,"hunter" ,"and" ,"sister" ,"bruna" ,"ferraz" ,"brunette" ,"brutal" ,"brynn" ,"bubble" ,"butt" ,"bulma" ,"busty" ,"russians" ,"cam" ,"camera" ,"inside" ,"vagina" ,"can" ,"he" ,"score" ,"candace" ,"von" ,"candy" ,"manson" ,"car" ,"carly" ,"parker" ,"carmel" ,"moore" ,"carmella" ,"bing" ,"carmen" ,"hayes" ,"kinsley" ,"luvana" ,"carton" ,"cartoon" ,"network" ,"cash" ,"for" ,"cassandra" ,"cassie" ,"young" ,"catwoman" ,"caught" ,"masturbating" ,"celeb" ,"tapes" ,"celebrity" ,"nudes" ,"tape" ,"cfnm" ,"charley" ,"chase" ,"charlie" ,"laine" ,"charlotte" ,"stokely" ,"charmane" ,"star" ,"chasey" ,"lain" ,"chat" ,"chatroulette" ,"chav" ,"chayse" ,"evans" ,"cheat" ,"cheating" ,"cheerleader" ,"cherokee" ,"chicks" ,"with" ,"china" ,"chinese" ,"chloe" ,"lamb" ,"christina" ,"bella" ,"christmas" ,"christy" ,"canyon" ,"chubby" ,"chyanne" ,"jacobs" ,"cindy" ,"crawford" ,"hope" ,"claire" ,"dames" ,"classic" ,"classy" ,"claudia" ,"rossi" ,"close" ,"up" ,"club" ,"docking" ,"hero" ,"sounding" ,"stuffing" ,"sucking" ,"cody" ,"lane" ,"college" ,"dorm" ,"fest" ,"girls" ,"rules" ,"sluts" ,"colombian" ,"colombiana" ,"comic" ,"comics" ,"condom" ,"cory" ,"everson" ,"cosplay" ,"cougar" ,"courtney" ,"cummz" ,"simpson" ,"crazy" ,"angels" ,"cleanup" ,"thais" ,"creampies" ,"creamy" ,"crempie" ,"crissy" ,"moran" ,"crying" ,"crystal" ,"clear" ,"control" ,"down" ,"throat" ,"fiesta" ,"fountain" ,"shot" ,"shots" ,"swallow" ,"swap" ,"twice" ,"cum+inside" ,"cumpilation" ,"cunnilingus" ,"cute" ,"cytheria" ,"czech" ,"daisy" ,"dana" ,"dearmond" ,"dance" ,"dancing" ,"bear" ,"dani" ,"woodward" ,"daniella" ,"rush" ,"danish" ,"daphne" ,"rosen" ,"dare" ,"daria" ,"glover" ,"daughter" ,"dbz" ,"dd" ,"deauxma" ,"deep" ,"deepthroating" ,"defloration" ,"delilah" ,"strong" ,"delotta" ,"brown" ,"demon" ,"desi" ,"deutsch" ,"devil" ,"devon" ,"dexter" ,"diamond" ,"foxxx" ,"diaper" ,"bike" ,"dillan" ,"dirty" ,"latina" ,"maids" ,"masseur" ,"talk" ,"doctor" ,"dog" ,"dogging" ,"doggy" ,"doggystyle" ,"domination" ,"dominatrix" ,"dominican" ,"donkey" ,"dont" ,"me" ,"dora" ,"venter" ,"invasion" ,"double" ,"penetration" ,"vaginal" ,"syndrome" ,"downblouse" ,"dp" ,"dragon" ,"ball" ,"z" ,"dragonball" ,"drawn" ,"dream" ,"drinking" ,"dripping" ,"wet" ,"drunk" ,"fucked" ,"dry" ,"humping" ,"dutch" ,"dwarf" ,"dyanna" ,"dylan" ,"ryder" ,"eat" ,"ebony" ,"sexy" ,"squirting" ,"ecg" ,"egypt" ,"egyptian" ,"eight" ,"elbow" ,"electro" ,"elegant" ,"elena" ,"grimaldi" ,"elf" ,"ellen" ,"saint" ,"emma" ,"(mae)" ,"heart" ,"emo" ,"encouragement" ,"enema" ,"england" ,"english" ,"dubbed" ,"enormous" ,"erotic" ,"cartoons" ,"erotica" ,"women" ,"escort" ,"ethiopia" ,"ethiopian" ,"euro" ,"eva" ,"eve" ,"lawrence" ,"evelyn" ,"lin" ,"ex" ,"girlfriend" ,"revenge" ,"exgf" ,"exgirlfriend" ,"exotic" ,"explicit" ,"exploited" ,"babysitters" ,"extra" ,"gagging" ,"face" ,"facefuck" ,"facesitting" ,"facial" ,"fairy" ,"tail" ,"fake" ,"fakeagent" ,"family" ,"famous" ,"toons" ,"fantasy" ,"fart" ,"fat" ,"father" ,"faye" ,"reagan" ,"feet" ,"female" ,"ejaculation" ,"friendly" ,"masturbation" ,"femaleagent" ,"femdom" ,"fetish" ,"ffm" ,"filipina" ,"filipino" ,"film" ,"films" ,"final" ,"finnish" ,"first" ,"time" ,"movies" ,"fist" ,"fitness" ,"fleshlight" ,"flexible" ,"flick" ,"shagwell" ,"flower" ,"tucci" ,"foot" ,"footjob" ,"force" ,"foursome" ,"francaise" ,"francesca" ,"le" ,"freaky" ,"download" ,"hot" ,"internet" ,"mobile" ,"online" ,"clips" ,"games" ,"stream" ,"vids" ,"websites" ,"pornography" ,"pron" ,"streaming" ,"freeballing" ,"frei" ,"french" ,"friend" ,"friends" ,"mom" ,"frottage" ,"ftm" ,"money" ,"hard" ,"machine" ,"from" ,"18" ,"public" ,"fuckfest" ,"machines" ,"full" ,"movie" ,"fun" ,"funny" ,"furry" ,"fursuit" ,"futanari" ,"futanaria" ,"gag" ,"game" ,"gangbanged" ,"gaping" ,"gauge" ,"gay" ,"gdp" ,"geek" ,"gen" ,"padova" ,"georgia" ,"peach" ,"german" ,"ggw" ,"ghana" ,"ghetto" ,"gia" ,"paloma" ,"gianna" ,"giant" ,"gigantic" ,"gilf" ,"gina" ,"ginger" ,"cumming" ,"having" ,"masterbating" ,"next" ,"door" ,"action" ,"do" ,"hunting" ,"stockings" ,"peeing" ,"scissoring" ,"girlsdoporn" ,"giselle" ,"glamour" ,"glasses" ,"glory" ,"hole" ,"gloryhole" ,"gloryholes" ,"gold" ,"gonzo" ,"good" ,"goth" ,"gothic" ,"grandma" ,"grandpa" ,"great" ,"greek" ,"group" ,"guy" ,"gym" ,"gyno" ,"exam" ,"gypsy" ,"hairy" ,"cunts" ,"haley" ,"paige" ,"halloween" ,"hand" ,"handjobs" ,"hands" ,"handsfree" ,"hanjob" ,"hanna" ,"hilton" ,"hannah" ,"harper" ,"happy" ,"tugs" ,"core" ,"junky" ,"harmony" ,"(bliss)" ,"havana" ,"passion" ,"heather" ,"hegre-art" ,"3d" ,"manga" ,"tentacle" ,"her" ,"sweet" ,"hermaphrodite" ,"hidden" ,"high" ,"quality" ,"hijab" ,"hillary" ,"hipster" ,"hitomi" ,"tanaka" ,"holly" ,"body" ,"halston" ,"wellin" ,"hollywood" ,"home" ,"made" ,"homemade" ,"hood" ,"hooker" ,"horny" ,"moms" ,"horse" ,"mean" ,"indian" ,"naked" ,"hotel" ,"hottest" ,"housewife" ,"how" ,"make" ,"a" ,"huge" ,"hulk" ,"hogan" ,"humiliation" ,"i" ,"teacher" ,"have" ,"know" ,"that" ,"icelandic" ,"impregnation" ,"crack" ,"inari" ,"vachs" ,"incredible" ,"india" ,"summer" ,"uncovered" ,"actress" ,"aunty" ,"mms" ,"maid" ,"stars" ,"pornstars" ,"real" ,"scandals" ,"village" ,"indie" ,"indonesia" ,"indonesian" ,"inflatable" ,"plug" ,"innocent" ,"insane" ,"insertion" ,"instruction" ,"instructional" ,"intense" ,"interactive" ,"interesting" ,"internal" ,"interview" ,"ipad" ,"iran" ,"iranian" ,"iraq" ,"irish" ,"isabel" ,"ice" ,"isabella" ,"soprano" ,"isis" ,"israel" ,"israeli" ,"italian" ,"italiana" ,"J" ,"jack" ,"napier" ,"off" ,"jacking" ,"jaclyn" ,"case" ,"jacuzzi" ,"jada" ,"fire" ,"jail" ,"jailbait" ,"jamaica" ,"jamaican" ,"jamie" ,"elle" ,"jana" ,"cova" ,"jane" ,"darling" ,"janine" ,"lindemulder" ,"jap" ,"japan" ,"japanese" ,"av" ,"beauties" ,"daddy" ,"show" ,"son" ,"mother" ,"nurse" ,"schoolgirl" ,"student" ,"uncensored" ,"jasmin" ,"st." ,"jasmine" ,"byrne" ,"rouge" ,"tame" ,"jayden" ,"jaymes" ,"jayna" ,"oso" ,"jazmine" ,"cashmere" ,"jeanna" ,"fine" ,"jeans" ,"jelena" ,"jensen" ,"jenaveve" ,"jenna" ,"haze" ,"jameson" ,"presley" ,"jenni" ,"jennifer" ,"luv" ,"stone" ,"jenny" ,"hendrix" ,"jerk" ,"instructions" ,"jerking" ,"jerkoff" ,"jerky" ,"jessi" ,"summers" ,"jessica" ,"bangkok" ,"drake" ,"rabbit" ,"jeune" ,"jew" ,"jewish" ,"jill" ,"kelly" ,"jizz" ,"jock" ,"jogging" ,"john" ,"holmes" ,"johnni" ,"jr" ,"carrington" ,"juggalette" ,"juggs" ,"juicy" ,"kacey" ,"jordan" ,"kagney" ,"linn" ,"karter" ,"kama" ,"sutra" ,"kamasutra" ,"kapri" ,"styles" ,"kardashian" ,"karen" ,"lancaume" ,"karina" ,"kay" ,"kat" ,"kathleen" ,"kruz" ,"katie" ,"morgan" ,"katja" ,"kassin" ,"katrina" ,"kraven" ,"katsumi" ,"kayden" ,"kross" ,"kayla" ,"kaylani" ,"lei" ,"kaylee" ,"b" ,"divine" ,"kline" ,"trump" ,"wells" ,"kenyan" ,"keri" ,"sable" ,"windsor" ,"kianna" ,"kidnap" ,"kidnapped" ,"kids" ,"kiki" ,"daire" ,"kim" ,"kind" ,"kink" ,"kink.com" ,"kinky" ,"kinzie" ,"kenner" ,"kira" ,"kener" ,"kiss" ,"kissing" ,"kitchen" ,"kitty" ,"kobe" ,"tai" ,"korea" ,"korean" ,"webcam" ,"kream" ,"kristal" ,"kristina" ,"krystal" ,"steal" ,"kylie" ,"ireland" ,"lacey" ,"duvalle" ,"lacie" ,"lactating" ,"ladies" ,"lady" ,"lana" ,"croft" ,"lani" ,"lanny" ,"lap" ,"lapdance" ,"large" ,"breasts" ,"latest" ,"latex" ,"latin" ,"latinas" ,"latino" ,"laura" ,"lion" ,"phoenix" ,"leah" ,"jaye" ,"leanna" ,"legal" ,"leggings" ,"lela" ,"lelu" ,"69" ,"breastfeeding" ,"cheerleaders" ,"grannies" ,"grinding" ,"lovers" ,"piss" ,"seduce" ,"seduction" ,"sisters" ,"slave" ,"spanking" ,"strap" ,"strapon" ,"tribbing" ,"twins" ,"wrestling" ,"making" ,"out" ,"lesbo" ,"lex" ,"steele" ,"lexi" ,"belle" ,"lexington" ,"lez" ,"lezbo" ,"lezley" ,"zen" ,"lichelle" ,"lick" ,"lily" ,"thai" ,"lindsey" ,"meadows" ,"lingerie" ,"lisa" ,"lipps" ,"sparxxx" ,"little" ,"lolita" ,"london" ,"longest" ,"loni" ,"loona" ,"lux" ,"loose" ,"lorena" ,"sanchez" ,"lucie" ,"theodorova" ,"lucy" ,"luna" ,"luscious" ,"lopez" ,"macho" ,"fucker" ,"mackenzee" ,"pierce" ,"madison" ,"ivy" ,"malay" ,"male" ,"man" ,"mandingo" ,"maria" ,"bellucci" ,"ozawa" ,"mariah" ,"milano" ,"mark" ,"marquetta" ,"jewel" ,"marry" ,"mary" ,"anne" ,"mason" ,"storm" ,"creep" ,"parlor" ,"penis" ,"massagesex" ,"massive" ,"masterbation" ,"maya" ,"hills" ,"mckenzie" ,"miles" ,"medical" ,"voyeur" ,"medieval" ,"melissa" ,"melrose" ,"memphis" ,"monroe" ,"men" ,"play" ,"mercedez" ,"messy" ,"mexican" ,"mia" ,"bangg" ,"micah" ,"michelle" ,"maylene" ,"midget" ,"mika" ,"tan" ,"miko" ,"military" ,"milk" ,"milking" ,"milky" ,"millian" ,"blu" ,"mindy" ,"main" ,"vega" ,"missionary" ,"missy" ,"misti" ,"mistress" ,"misty" ,"mmf" ,"model" ,"mofos" ,"fucks" ,"mommy" ,"loves" ,"mompov" ,"mone" ,"talks" ,"monica" ,"mattos" ,"mayhem" ,"santhiago" ,"sweetheart" ,"monique" ,"alexander" ,"monster" ,"curves" ,"law" ,"mr" ,"marcus" ,"multiple" ,"mum" ,"muscle" ,"mushroom" ,"music" ,"muslim" ,"mutual" ,"wifes" ,"mya" ,"g" ,"nichole" ,"nadia" ,"celebrities" ,"housewives" ,"celebs" ,"news" ,"twerking" ,"twister" ,"whores" ,"workout" ,"yoga" ,"naomi" ,"russell" ,"naruto" ,"nasty" ,"natalia" ,"natasha" ,"nice" ,"native" ,"naughty" ,"america" ,"office" ,"nautica" ,"thorn" ,"nazi" ,"neighbor" ,"neighbour" ,"nerd" ,"nessa" ,"net" ,"netvideogirls" ,"new" ,"graves" ,"ray" ,"sheridan" ,"nigerian" ,"night" ,"nikita" ,"denise" ,"nikki" ,"benz" ,"n" ,"nina" ,"hartley" ,"ninja" ,"nipple" ,"norway" ,"norwegian" ,"nubile" ,"nubiles" ,"nude" ,"aerobics" ,"redheads" ,"nudist" ,"nun" ,"nuru" ,"nvg" ,"nylon" ,"nympho" ,"octomom" ,"odd" ,"oil" ,"overload" ,"oiled" ,"oily" ,"old" ,"farts" ,"tarts" ,"people" ,"woman" ,"older" ,"olivia" ,"del" ,"rio" ,"omegle" ,"one" ,"piece" ,"onion" ,"oops" ,"open" ,"oral" ,"queens" ,"contractions" ,"denial" ,"orgies" ,"oriental" ,"outdoor" ,"nudity" ,"over" ,"60" ,"painful" ,"pakistani" ,"pamela" ,"panties" ,"panty" ,"pee" ,"pantyhose" ,"paris" ,"parody" ,"passed" ,"passionate" ,"patricia" ,"petite" ,"paulina" ,"james" ,"pawg" ,"peaches" ,"pegging" ,"penny" ,"flame" ,"perfect" ,"perky" ,"persia" ,"decarlo" ,"persian" ,"peter" ,"north" ,"petra" ,"phat" ,"pick" ,"pickup" ,"pierre" ,"woodman" ,"pinay" ,"pink" ,"pinky" ,"pinoy" ,"pirates" ,"playboy" ,"please" ,"pokemon" ,"police" ,"polish" ,"pool" ,"bloopers" ,"pornstar" ,"pregnant" ,"priva" ,"private" ,"priya" ,"rai" ,"prostate" ,"prostitute" ,"disgrace" ,"pickups" ,"wank" ,"publicagent" ,"puerto" ,"rican" ,"puffy" ,"puma" ,"swede" ,"punish" ,"punk" ,"pure" ,"puremature" ,"pump" ,"quad" ,"quadriplegic" ,"quadruple" ,"quarterback" ,"quebec" ,"quebecoise" ,"queef" ,"queefing" ,"diva" ,"sheba" ,"queening" ,"quick" ,"bj" ,"cummer" ,"head" ,"quickest" ,"quickie" ,"quicksand" ,"quicky" ,"quiet" ,"quirky" ,"quivering" ,"rachel" ,"roxxx" ,"rare" ,"rave" ,"raven" ,"riley" ,"raw" ,"rayveness" ,"life" ,"slut" ,"realistic" ,"reality" ,"kings" ,"rebeca" ,"linares" ,"rebecca" ,"red" ,"hair" ,"redhead" ,"redneck" ,"redtube" ,"regina" ,"renae" ,"renata" ,"retro" ,"Return" ,"top" ,"20" ,"reverse" ,"cowgirl" ,"ricki" ,"white" ,"rico" ,"ridiculous" ,"riding" ,"shy" ,"rim" ,"rimjob" ,"rimming" ,"rita" ,"faltoyano" ,"robot" ,"rocco" ,"siffredi" ,"role" ,"playing" ,"roleplay" ,"roman" ,"romance" ,"romanian" ,"romantic" ,"ron" ,"jeremy" ,"rough" ,"round" ,"roxy" ,"deville" ,"jezel" ,"reynolds" ,"rubbing" ,"ruined" ,"russian" ,"rusty" ,"trombone" ,"ryan" ,"conner" ,"sabrine" ,"maui" ,"sadie" ,"west" ,"sahara" ,"knight" ,"sakura" ,"sena" ,"samantha" ,"sammie" ,"samoan" ,"sandra" ,"romain" ,"sandy" ,"sapphic" ,"sara" ,"jay" ,"st" ,"sarah" ,"blake" ,"twain" ,"vandella" ,"sasha" ,"grey" ,"knox" ,"sativa" ,"sauna" ,"savannah" ,"stern" ,"scandal" ,"scarlett" ,"scene" ,"scouse" ,"screw" ,"sean" ,"secretary" ,"self" ,"sensual" ,"submission" ,"moves" ,"pornos" ,"positions" ,"underwater" ,"sg4ge" ,"sharing" ,"sharka" ,"sharon" ,"wi" ,"shaved" ,"shaving" ,"shawna" ,"lenee" ,"sheila" ,"shemale" ,"short" ,"your" ,"shower" ,"shyla" ,"stylez" ,"sienna" ,"sierra" ,"sinn" ,"silvia" ,"simone" ,"simony" ,"sindee" ,"jennings" ,"sinnamon" ,"skinny" ,"skyy" ,"sleep" ,"sleeping" ,"sloppy" ,"slow" ,"roulette" ,"small" ,"smoking" ,"soapy" ,"soft" ,"softcore" ,"solo" ,"some" ,"ho" ,"sondra" ,"hall" ,"sonia" ,"sophia" ,"castello" ,"sophie" ,"dee" ,"moone" ,"spanish" ,"spank" ,"spiderman" ,"spring" ,"break" ,"spy" ,"squirters" ,"stacy" ,"step" ,"dad" ,"stepdad" ,"stephanie" ,"cane" ,"swift" ,"stepmom" ,"stickam" ,"stocking" ,"stormy" ,"daniels" ,"story" ,"stoya" ,"stranger" ,"strip" ,"stripper" ,"striptease" ,"sunny" ,"sunrise" ,"adams" ,"sunshine" ,"super" ,"superhero" ,"suzie" ,"carina" ,"swedish" ,"tee" ,"swinger" ,"sybian" ,"sydnee" ,"capri" ,"tabitha" ,"taboo" ,"taiwan" ,"tall" ,"tango" ,"tanya" ,"tarra" ,"taryn" ,"thomas" ,"tarzan" ,"tasia" ,"tasteful" ,"tatoo" ,"tattoo" ,"tawny" ,"roberts" ,"rain" ,"cla" ,"teagan" ,"teanna" ,"kai" ,"tease" ,"titans" ,"teenage" ,"teenager" ,"teenporn" ,"tera" ,"patrick" ,"terri" ,"thailand" ,"avengers" ,"thick" ,"thong" ,"throbbing" ,"tia" ,"ling" ,"sweets" ,"tiana" ,"tied" ,"tiffany" ,"holiday" ,"hopkins" ,"mynx" ,"preston" ,"tight" ,"tiny" ,"titfuck" ,"titjob" ,"titts" ,"titty" ,"toilet" ,"tokyo" ,"tomb" ,"raider" ,"tommy" ,"tonights" ,"too" ,"toon" ,"tori" ,"tory" ,"toy" ,"train" ,"tranny" ,"tricked" ,"trina" ,"trinidad" ,"trinity" ,"trios" ,"triple" ,"tron" ,"truth" ,"or" ,"tube8" ,"tugjob" ,"turk" ,"turkish" ,"twerk" ,"twin" ,"twistys" ,"tyla" ,"wynn" ,"tyra" ,"misoux" ,"ugandan" ,"ugly" ,"americans" ,"uk" ,"flashers" ,"ukraine" ,"ukrainian" ,"ultimate" ,"surrender" ,"umemaro" ,"unbelievable" ,"uncircumcised" ,"uncle" ,"uncontrollable" ,"uncut" ,"under" ,"table" ,"underground" ,"underwear" ,"underworld" ,"undress" ,"undressed" ,"undressing" ,"unexpected" ,"uniform" ,"university" ,"unnatural" ,"unreal" ,"untouched" ,"unused" ,"pussies" ,"unusual" ,"unwanted" ,"upper" ,"floor" ,"upside" ,"upskirt" ,"no" ,"urban" ,"urethra" ,"urethral" ,"urinal" ,"using" ,"vibrator" ,"vampire" ,"van" ,"vanessa" ,"leon" ,"velicity" ,"venezuela" ,"veronica" ,"l" ,"vanoza" ,"veronique" ,"very" ,"vicky" ,"vett" ,"vette" ,"victoria" ,"victorian" ,"victorious" ,"vietnam" ,"vietnamese" ,"vintage" ,"violation" ,"violent" ,"vip" ,"virginity" ,"virtual" ,"viv" ,"vivian" ,"schmitt" ,"vivid" ,"volleyball" ,"wake" ,"wasteland" ,"watch" ,"watching" ,"wedding" ,"weed" ,"weird" ,"welsh" ,"werewolf" ,"western" ,"wetting" ,"whipped" ,"whitezilla" ,"whitney" ,"whore" ,"wicked" ,"bbc" ,"breeding" ,"bucket" ,"flashing" ,"share" ,"wifey" ,"wifeys" ,"world" ,"wives" ,"work" ,"wonder" ,"worlds" ,"wow" ,"wowgirls" ,"wrong" ,"wwe" ,"x" ,"mas" ,"xart" ,"x-art" ,"xhamster" ,"xl" ,"xmas" ,"x-men" ,"xnxx" ,"xtube" ,"xvideos" ,"xxl" ,"france" ,"hindi" ,"proposal" ,"rated" ,"xxxmas" ,"pants" ,"yorkshire" ,"boy" ,"fatties" ,"harlots" ,"hotties" ,"parties" ,"throats" ,"youporn" ,"yummy" ,"mama" ,"zelda" ,"zimbabwe" ,"zimbabwean" ,"zombie" ,"zumba" ,"4r5e" ,"5h1t" ,"5hit" ,"a55" ,"anus" ,"ar5e" ,"arrse" ,"arse" ,"ass-fucker" ,"assfucker" ,"assfukka" ,"asshole" ,"assholes" ,"asswhole" ,"a_s_s" ,"b!tch" ,"b00bs" ,"b17ch" ,"b1tch" ,"ballbag" ,"balls" ,"ballsack" ,"bastard" ,"beastial" ,"beastiality" ,"bellend" ,"bestial" ,"bestiality" ,"bi+ch" ,"biatch" ,"bitch" ,"bitcher" ,"bitchers" ,"bitches" ,"bitchin" ,"bitching" ,"bloody" ,"boiolas" ,"bollock" ,"bollok" ,"boob" ,"booobs" ,"boooobs" ,"booooobs" ,"booooooobs" ,"buceta" ,"bugger" ,"bum" ,"bunny" ,"butthole" ,"buttmuch" ,"buttplug" ,"c0ck" ,"c0cksucker" ,"carpet" ,"muncher" ,"cawk" ,"chink" ,"cipa" ,"cl1t" ,"clitoris" ,"clits" ,"cnut" ,"cock-sucker" ,"cockface" ,"cockhead" ,"cockmunch" ,"cockmuncher" ,"cocksuck" ,"cocksucked" ,"cocksucker" ,"cocksucking" ,"cocksucks" ,"cocksuka" ,"cocksukka" ,"cok" ,"cokmuncher" ,"coksucka" ,"coon" ,"cox" ,"crap" ,"cums" ,"cunilingus" ,"cunillingus" ,"cuntlick" ,"cuntlicker" ,"cuntlicking" ,"cyalis" ,"cyberfuc" ,"cyberfuck" ,"cyberfucked" ,"cyberfucker" ,"cyberfuckers" ,"cyberfucking" ,"d1ck" ,"damn" ,"dickhead" ,"dildos" ,"dink" ,"dinks" ,"dirsa" ,"dlck" ,"dog-fucker" ,"doggin" ,"donkeyribber" ,"doosh" ,"duche" ,"dyke" ,"ejaculate" ,"ejaculated" ,"ejaculates" ,"ejaculating" ,"ejaculatings" ,"ejakulate" ,"f" ,"u" ,"c" ,"k" ,"e" ,"r" ,"f4nny" ,"fag" ,"fagging" ,"faggitt" ,"faggot" ,"faggs" ,"fagot" ,"fagots" ,"fags" ,"fanny" ,"fannyflaps" ,"fannyfucker" ,"fanyy" ,"fatass" ,"fcuk" ,"fcuker" ,"fcuking" ,"feck" ,"fecker" ,"felching" ,"fellate" ,"fellatio" ,"fingerfuck" ,"fingerfucked" ,"fingerfucker" ,"fingerfuckers" ,"fingerfucking" ,"fingerfucks" ,"fistfuck" ,"fistfucked" ,"fistfucker" ,"fistfuckers" ,"fistfucking" ,"fistfuckings" ,"fistfucks" ,"flange" ,"fook" ,"fooker" ,"fucka" ,"fuckers" ,"fuckhead" ,"fuckheads" ,"fuckin" ,"fuckings" ,"fuckingshitmotherfucker" ,"fuckme" ,"fuckwhit" ,"fuckwit" ,"fudge" ,"packer" ,"fudgepacker" ,"fuk" ,"fuker" ,"fukker" ,"fukkin" ,"fuks" ,"fukwhit" ,"fukwit" ,"fux" ,"fux0r" ,"f_u_c_k" ,"gangbangs" ,"gaylord" ,"gaysex" ,"goatse" ,"God" ,"god-dam" ,"god-damned" ,"goddamn" ,"goddamned" ,"hardcoresex" ,"hell" ,"heshe" ,"hoar" ,"hoare" ,"hoer" ,"homo" ,"hore" ,"horniest" ,"hotsex" ,"jack-off" ,"jackoff" ,"jerk-off" ,"jism" ,"jiz" ,"jizm" ,"kawk" ,"knob" ,"knobead" ,"knobed" ,"knobend" ,"knobhead" ,"knobjocky" ,"knobjokey" ,"kock" ,"kondum" ,"kondums" ,"kum" ,"kummer" ,"kumming" ,"kums" ,"kunilingus" ,"l3i+ch" ,"l3itch" ,"labia" ,"lmfao" ,"lust" ,"lusting" ,"m0f0" ,"m0fo" ,"m45terbate" ,"ma5terb8" ,"ma5terbate" ,"masochist" ,"master-bate" ,"masterb8" ,"masterbat*" ,"masterbat3" ,"masterbate" ,"masterbations" ,"masturbate" ,"mo-fo" ,"mof0" ,"mofo" ,"mothafuck" ,"mothafucka" ,"mothafuckas" ,"mothafuckaz" ,"mothafucked" ,"mothafucker" ,"mothafuckers" ,"mothafuckin" ,"mothafucking" ,"mothafuckings" ,"mothafucks" ,"motherfuck" ,"motherfucked" ,"motherfucker" ,"motherfuckers" ,"motherfuckin" ,"motherfucking" ,"motherfuckings" ,"motherfuckka" ,"motherfucks" ,"muff" ,"mutha" ,"muthafecker" ,"muthafuckker" ,"muther" ,"mutherfucker" ,"n1gga" ,"n1gger" ,"nigg3r" ,"nigg4h" ,"nigga" ,"niggah" ,"niggas" ,"niggaz" ,"nigger" ,"niggers" ,"nob" ,"jokey" ,"nobhead" ,"nobjocky" ,"nobjokey" ,"numbnuts" ,"nutsack" ,"orgasim" ,"orgasims" ,"orgasms" ,"p0rn" ,"pawn" ,"pecker" ,"penisfucker" ,"phonesex" ,"phuck" ,"phuk" ,"phuked" ,"phuking" ,"phukked" ,"phukking" ,"phuks" ,"phuq" ,"pigfucker" ,"pimpis" ,"pissed" ,"pisser" ,"pissers" ,"pisses" ,"pissflaps" ,"pissin" ,"pissoff" ,"poop" ,"prick" ,"pricks" ,"pube" ,"pusse" ,"pussi" ,"pussys" ,"rectum" ,"retard" ,"rimjaw" ,"s" ,"hit" ,"s.o.b." ,"sadist" ,"schlong" ,"screwing" ,"scroat" ,"scrote" ,"scrotum" ,"semen" ,"sh!+" ,"sh!t" ,"sh1t" ,"shag" ,"shagger" ,"shaggin" ,"shagging" ,"shi+" ,"shit" ,"shitdick" ,"shite" ,"shited" ,"shitey" ,"shitfuck" ,"shitfull" ,"shithead" ,"shiting" ,"shitings" ,"shits" ,"shitted" ,"shitter" ,"shitters" ,"shitting" ,"shittings" ,"shitty" ,"skank" ,"smegma" ,"smut" ,"snatch" ,"son-of-a-bitch" ,"spac" ,"spunk" ,"s_h_i_t" ,"t1tt1e5" ,"t1tties" ,"teets" ,"teez" ,"testical" ,"testicle" ,"titt" ,"tittie5" ,"tittiefucker" ,"tittyfuck" ,"tittywank" ,"titwank" ,"tosser" ,"turd" ,"tw4t" ,"twat" ,"twathead" ,"twatty" ,"twunt" ,"twunter" ,"v14gra" ,"v1gra" ,"viagra" ,"vulva" ,"w00se" ,"wang" ,"wanker" ,"wanky" ,"whoar" ,"willies" ,"willy" ,"xrated" ];
            $scope.listOfProfanity = [];
            $scope.words = [];
            $scope.loggedin = null;
            $scope.tabsLimit = 6;
            $scope.caughtColor = "#7B1FA2";
            $scope.banndedUrlsList = [];
            $scope.searchTerm;
            $scope.stop = "no";
            $scope.themeList = [{
                color: "#F44336",
                active: true
            }];

            //Used to understand wha to overwrite
            $scope.blackList = [];
            $scope.whiteList = [];

            //this is fine.
            $scope.savedTheme = localStorage.getItem('theme');
            $scope.theme = (localStorage.getItem('theme') !== null) ? JSON.parse($scope.savedTheme) : $scope.themeList;
            $scope.themeStyle = (localStorage.getItem('theme') !== null) ? {
                'background-color': $scope.theme[0][0]['color']
            } : {
                'background-color': "#F44336"
            };
            $scope.themeStyleSides = (localStorage.getItem('theme') !== null) ? {
                'border-left': "2px solid " + $scope.theme[0][0]['color'],
                'border-bottom': "2px solid " + $scope.theme[0][0]['color']
            } : {
                'border-left': "2px solid " + "#F44336",
                'border-bottom': "2px solid " + "#F44336"
            };
            $scope.password = (localStorage.getItem('password') === null) ? null : localStorage.getItem('password');


            /**
             * Onload Event for Angular
             * @param {none} none 
             * @return {none} none
             */
            $scope.init = function () {
                $scope.createTab('');
            };


            /**
             * sets current color or theme
             * @param {String} color 
             * @return {none} none
             */
            $scope.setColor = function (color) {
                $scope.removeLocalStorage('theme');
                $scope.theme = [];
                $scope.theme.push([{
                    color: color,
                    active: true
                }]);
                localStorage.setItem('theme', JSON.stringify($scope.theme));
                $scope.themeStyle = {
                    'background-color': color

                };
                $scope.themeStyleSides = {
                    'border-left': "2px solid " + color,
                    'border-bottom': "2px solid " + color
                };
            }


            /**
             * Remove localstorage by key
             * @param {String} Key
             * @return {none} none
             */
            $scope.removeLocalStorage = function (key) {
                localStorage.removeItem(key);
            };


            /**
             * Show Current tabs in expand view
             * @param {String} Key
             * @return {none} none
             */
            $scope.showTabs = function (key) {
                expandTabs();
            };


            /**
             * Go Back in iframe
             * @param {none} none
             * @return {none} none
             */
            $scope.goBack = function () {
                document.getElementById($('.iframe.active').attr('id')).contentWindow.history.back();

            };


            /**
             * Go Forword in iframe
             * @param {none} none
             * @return {none} none
             */
            $scope.goForword = function () {
                document.getElementById($('.iframe.active').attr('id')).contentWindow.history.forword();
            };


            /**
             * Refresh iframe
             * @param {none} none
             * @return {none} none
             */
            $scope.refresh = function () {
                $('.iframe.active').attr('src', $('.iframe.active').attr('src'));
            };


            /**
             * Go Home in iframe
             * @param {none} none
             * @return {none} none
             */
            $scope.home = function () {
                $('.iframe.active').attr('src', 'https://duckduckgo.com/?q=');
            };


            /**
             * Search
             * @param {object} keyEvent
             * @return {none} none
             */
            $scope.search = function (keyEvent) {
                if ($scope.searchTerm === "devKeys") {
                    require('nw.gui').Window.get().showDevTools();
                }
                if ($scope.searchTerm === "easteregg") {
                    cornify_add();
                }

                if (keyEvent.which === 13) {
                    $scope.searchResult($scope.searchTerm);
                    setPageTitle($scope.searchTerm);
                };
            }


            /**
             * Auto focus the text in input
             * @param {none} none
             * @return {none} none
             */
            $scope.autoFocus = function () {
                document.getElementById("searchTerm").select();
            }


            /**
             * Set Page title
             * @param {String} title
             * @return {none} none
             */
            function setPageTitle(title) {
                document.title = "Robin : " + title;
            }


            /**
             * Run search String 
             * @param {String} search
             * @return {none} none
             */
            $scope.searchResult = function (search) {
                var currentUrlNow = $('.iframe.active').contents().get(0).location.href;
                var searchUrl;
                if (search.indexOf("http") > -1) {
                    searchUrl = search;
                } else if (search.indexOf("assets") > -1) {
                    searchUrl = search;
                    $('.iframe.active').attr('src', searchUrl);
                } else {

                    searchUrl = "https://duckduckgo.com/?q=" + search;
                }
                $('.iframe.active').attr('src', searchUrl);
            };


            /**
             * Create Tab
             * @param {String} search
             * @return {none} none
             */
            $scope.createTab = function (url) {
                var getAmountOfTabs = document.getElementsByTagName("iframe").length;
                if (getAmountOfTabs !== $scope.tabsLimit) {


                    $('.home').removeClass('active');
                    $('.iframe').removeClass('active');
                    var tabs = document.getElementById('tabs');
                    var span = document.createElement("section");
                    span.setAttribute("class", "home active ");
                    span.setAttribute("id", "iframes" + getAmountOfTabs);
                    span.setAttribute("ng-style", "themeStyle");



                    var div = document.createElement("div");
                    div.setAttribute("class", "urlText");

                    var title = document.createElement("p");
                    title.setAttribute("class", "title");
                    title.innerHTML = "https://duckduckgo.com/?q=" + url;
       
                    var exitTab = document.createElement("div");
                    exitTab.setAttribute("class", "mdi-navigation-close");
                    exitTab.setAttribute("id", getAmountOfTabs + "s");
    
                    div.appendChild(title);

                    var divBackdrop = document.createElement("div");
                    divBackdrop.setAttribute("class", "backdrop");
                    divBackdrop.setAttribute("class", "backdrop");
                    divBackdrop.setAttribute("ng-style", "themeStyle");
                    divBackdrop.appendChild(div);
                    divBackdrop.appendChild(exitTab);
                    var iframes = document.createElement("iframe");
                    iframes.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms");
                    iframes.setAttribute("src", "https://duckduckgo.com/?q=" + url);
                    iframes.setAttribute("class", "iframe active  ");
                    iframes.setAttribute("id", getAmountOfTabs);
                    iframes.setAttribute("width", window.innerWidth);
                    iframes.setAttribute("height", "100%");

                    span.appendChild(divBackdrop);
                    span.appendChild(iframes);
                    tabs.appendChild(span);


                    $('.iframe.active').on('load', function () { //binds the event 
                        balance();
                        checkForBannedUrl();
                        setInterval(workHorse, 1000)
runUpdateFromDatabase();
                    });

                    $(".mdi-navigation-close").on('click', function (event) {

                        if (getAmountOfTabs  != 0 ){
                       removeWindow(event.target.id);
                        }

                        event.stopPropagation();
          
                    });



                    $('section').on('click', function () {
                        $(this).closest('section').prependTo('.contain');
                        $('section').removeClass('active');
                        $('.home.active .iframe').removeClass('active');
                        $(this).addClass('active');
                        $('.home.active .iframe').addClass('active');
                        $('.contain').removeClass('active');
                    });

                } else {
                    //  alert('tab Limit reached');
                }
            };

            /**
            * Remove unneeded Windows
            * @param {none} none 
            * @param {none} none
            * @return {none} none
            */
            function removeWindow(id) {

                var parent = document.getElementById("tabs");
                var child = document.getElementById("iframes" + id.replace('s',''));
                    parent.removeChild(child);
            };

            /**
             * Banned Urls, redirects if its a banned url
             * @param {none} none
             * @return {none} none
             */
            function checkForBannedUrl() {
                for (i = 0; i < $scope.blackList.length; i++) {
                    var currentUrlNow = $('.iframe.active').contents().get(0).location.href,
                        bannedUrl = $scope.blackList[i]["url"];
                    if (currentUrlNow.indexOf(bannedUrl) > -1) {
                        $scope.searchResult("http://projectbird.com");
                        $scope.setColor("#000");
                        break;
                    }
                    $scope.searchTerm = currentUrlNow;
                    $scope.apply;

                }
            }



            /**
             * Load balacing for the scraping of files
             * @param {none} none
             * @return {none} none
             */
            function balance() {

                var tempUrl = $('.iframe.active').contents().get(0).location.href;

                if ($scope.loggedin) {
                    saveCurrentUrl(tempUrl); //Store the url to firebase
                    sraper(tempUrl);
                }

                $scope.searchTerm = tempUrl;
                $scope.apply;
                resizeIframe();
            }




            /**
             * Resize the Iframes to the width and height of the window 
             * @param {none} none
             * @return {none} none
             */
            function resizeIframe() {
                $("iframe").each(function () {
                    $(this).width = window.innerWidth;
                    $(this).height = "100%";
                });
            }


            /**
            * Scrap Results
            * @param {String} url
            * @return {none} none
            */
            function sraper(url) {


                async.waterfall([
                    async.apply(myFirstFunction,url),
                    mySecondFunction
                ], function (err, words,profanity) {
                    var temp = ( 100 / words.length ) * profanity.length;
                    setWebsiteScore(url,temp);
                });
                function myFirstFunction(urls, callback) {
                      mrscraper(urls, function (words2) {
                            callback(null, words2);
                      });
                }
                function mySecondFunction(words, callback) {   
                    callback(null, words,getMatch(words, $scope.listOfProfanityWords) );
                }

            }


            /**
            * Checks for matching items in arras
            * @param {array} array
            * @param {array} array
            * @return {array} matching strings
            */
            function getMatch(a, b) {
                var matches = [];

                for ( var i = 0; i < a.length; i++ ) {
                    for ( var e = 0; e < b.length; e++ ) {
                        if ( a[i] === b[e] ) matches.push( a[i] ),$scope.listOfProfanity.push( a[i] );
                    }
                }
                return matches;
            }
       

            /**
             * Expand and view all tabs
             * @param {none} none
             * @return {none} nonehttp://www.buzzfeed.com/mjs538/the-68-words-you-cant-say-on-tv#.nbvLJyL2m
             */
            function expandTabs() {
                $('section').scrollTop(54);
                $('.contain').toggleClass('active');
            }


            /**
             * Create a new iframe
             * @param {String} url
             * @return {Number} tabId
             */
            function createIframe(url, tabId) {
                var iframes = document.createElement("iframe");
                iframes.setAttribute("src", "https://duckduckgo.com/?q=" + url);
                iframes.setAttribute("class", "iframe active");
                iframes.setAttribute("id", tabId);
                iframes.setAttribute("width", window.innerWidth);
                iframes.setAttribute("height", "100%");

            }


            /**
             * Runs the system to upload to firebase
             * @param {none} none
             * @return {Number} tabId
             */
            function workHorse() { 
                console.log('Robin Running.....');

                if (typeof $scope.listOfProfanity !== 'undefined' && $scope.listOfProfanity.length > 0) {
                    for (var i = 0; i < $scope.listOfProfanity.length; i++) {
                        profanityToFirebase($scope.listOfProfanity[i]);
                    }
                }
runIsItDisabled();
                $scope.words = []; //clears it
            }


            /**
             * Stringify a string
             * @param {String} String
             * @return {String} JSON encoded string
             */
            function stringify(string) {
                return JSON.stringify(string);
            }


            /**
             * Get the current Time
             * @param {none} none
             * @return {Time} Time
             */
            function getCurrentTime() {

                var d = new Date(); // for now
                return d.getHours() + " " + d.getMinutes() + " " + d.getSeconds();

            }


            /**
             * Get the current Date
             * @param {none} none
             * @return {Date} Date
             */
            function getCurrentDate() {

                var d = new Date();
                return d.toDateString();

            }


            /**
             * Set the current userId in the database.
             * @param {String} id 
             * @return {none} none
             */
            function saveCurrentUrl(url) {
                $scope.searchTerm = url;
                var usersRef = ref.child($scope.loggedin).child("children").child(removeRegexForMac(ip));
                usersRef.update({
                    name: user,
                    status: "active",
                    currentUrl: stringify(url),
                    time: getCurrentTime(),
                    date: getCurrentDate(),
                    platform: navigator.platform
                });
            }

            /**
             * Set the current userId in the database.
             * @param {String} id 
             * @return {none} none
             */
            function setIpAddress(id) {
                var usersRef = ref.child(id).child("children").child(removeRegexForMac(ip));
                usersRef.set({
                    name: user,
                    status: "active",
                    currentUrl: "none",
                    time: getCurrentTime(),
                    date: getCurrentDate(),
                    platform: navigator.platform
                });
            }

            /**
             * Set website score
             * @param {String} id 
             * @return {none} none
             */
                var lastUrl = null;
                function setWebsiteScore(url, scores) {
                    if (lastUrl != url){
                        var usersRef = ref.child("scores").child(removeRegexForMac(url));
                        usersRef.set({
                            currentUrl: stringify(url),
                            score: stringify(scores)
                        });
                    }
                    lastUrl = url;
                }


                /**
                 * Hand the login information for the robin
                 * @param {none} none 
                 * @param {none} none
                 * @return {none} none
                 */
                $scope.login = function () {
                    ref.child("users").authWithPassword({
                        email: $('input[name="loginemail"]').val(),
                        password: $('input[name="loginpassword"]').val()
                    }, function (error, authData) {
                        error ? errorCodes(error) : displayMessage("Just logging you in"), loginInformation($('input[name="loginemail"]').val(), authData), hideModal("login");
                    });
                };


                /**
                 * Hand the signup information for the robin
                 * @param {none} none 
                 * @param {none} none
                 * @return {none} none
                 */
                $scope.signup = function () {
                    ref.child("users").createUser({
                        email: $('input[name="signupemail"]').val(),
                        password: $('input[name="signuppassword"]').val()
                    }, function (error, userObj) {
                        error ? errorCodes(error) : displayMessage("Awesome , Your account is created"), createData(userObj, $('input[name="signupemail"]').val(), $('input[name="signuppassword"]').val()), hideModal("signup");
                    });
                };


                /**
                 * Handles and Displays the error codes
                 * @param {object} The error object thats is sent in from  firebase
                 * @return {none} none
                 */
                function errorCodes(error) {
                    switch (error.code) {
                        case "EMAIL_TAKEN":
                            displayMessage("The new user account cannot be created use.");
                            break;
                        case "INVALID_EMAIL":
                            displayMessage("The specified eeeeemail is not a valid email.");
                            break;
                        case "INVALID_USER":
                            displayMessage("The email or password wasnt there ");
                            break;
                        case "INVALID_PASSWORD":
                            displayMessage("The email or password wasnt there ");
                            break;
                        default:
                            displayMessage("Error :", error);
                    }
                }


                /**
                 * Display and error or comfirm message on login
                 * @param {String} message
                 * @return {none} none
                 */
                function displayMessage(message) {
                    setTimeout(function () {
                        $scope.showError = true;
                        $scope.errorMessage = message;
                        $scope.$apply();
                    }, 1000)

                    setTimeout(function () {
                        $scope.showError = false;
                        $scope.$apply();
                    }, 4000)

                }


                /**
                 * Hide current Id
                 * @param {Id} modalId
                 * @return {none} none
                 */
                function hideModal(modalId) {
                    setTimeout(function () {
                        $('#' + modalId).modal('hide');
                    }, 3000)

                }


                /**
                 * Creates the user and stores it in the database
                 * @param {String} userData
                 * @param {String} email
                 * @param {String} password
                 * @return {none} none
                 */
                function createData(userData, email, password) {
                    var usersRef = ref.child(userData.uid);
                    usersRef.set({
                        information: {
                            email: email,
                            password: password
                        },
                        ip: {},
                        list: {}
                    });
                    setIpAddress(userData.uid);
                }



                /**
                 * removeRegex
                 * @param {string} stringToReplace
                 * @return {string} desired
                 */
                function removeRegex(stringToReplace) {
                    var desired = stringToReplace.replace(/[^\w\s]/gi, '');
                    desired = desired.replace(/[^a-zA-Z ]/g, "");
                    return desired;
                }

                /**
                 * removeRegex for Mac
                 * @param {string} stringToReplace
                 * @return {string} desired
                 */
                function removeRegexForMac(stringToReplace) {
                    var desired = stringToReplace.replace(/[^\w\s]/gi, '');
                    return desired;
                }


                /**
                 * redirect, rediect the user
                 * @param {string} url
                 * @return {none} none
                 */
                function redirect(url) {
                    setTimeout(function () {
                        window.location = url;
                    }, 1000);
                }


                /**
                 * Checks for profanity
                 * @param {object} callback 
                 * @param {String} word
                 * @return {profanity} returns true or false if the word is classed.
                 */
                function profanityCheck(word, callback) {
                    $.ajax({
                        url: "http://www.wdyl.com/profanity?q=" + word,
                        async: true,
                        type: "GET",
                        dataType: "json",
                        success: function (data) {

                            data.response === "true" ? $scope.listOfProfanity.push(word) : null;
                            callback(data.response);
                        },
                        error: function (e) {
                            // alert('error, try again');
                        }
                    });
                }


                /**
                 * Sets the ipaddress and gets the user information objects,
                 * @param {string} the users email address they inputted
                 * @param {number} The firebase Id for the user.
                 * @return {none} none
                 */
                function loginInformation(email, id) {
                    ref.child("users").startAt(email).endAt(email).once('value', function (snapshot) {
                        setIpAddress(id.uid);
                        $scope.password = $('input[name="loginpassword"]').val();
                        localStorage.setItem('password', $('input[name="loginpassword"]').val());

                    }, function (errorObject) {
                        console.log("The read failed: " + errorObject.code);
                    });
                }




                /**
                 * Get profanity words
                 * @param {none} none
                 * @param {none} none
                 * @return {object} snapshot
                 */
                function getProfanityWords(temp, callback) {
                    ref.child("profanity").on('value', function (snapshot) {
                        callback(snapshot.val());
                    }, function (errorObject) {
                        console.log("The read failed: " + errorObject.code);
                    });
                }


                /**
                 * Store words that are classed as profanity to the database
                 * @param {word} the stting needed to be stored
                 * @return {none} none
                 */
                function profanityToFirebase(word) {

                    var usersRef = ref.child("profanity").child(removeRegex(word.toLowerCase()));
                    usersRef.set({
                        profanity: "true"
                    });
                    console.log(word + " added to firebase");
                    $scope.listOfProfanity.shift();
                }


                /**
                 * logout out from firebase,
                 * @param {none} none
                 * @return {none} none
                 */
                $scope.logout = function () {
                    $scope.showError = false;
                    if ($('input[name="logoutpassword"]').val() === localStorage.getItem('password')) {
                        $scope.banndedUrlsList = [];
                        logoutUpdate();
                        $scope.loggedin = null;
                        displayMessage("logedout");
                        $scope.removeLocalStorage("password"); //Remove password
                        ref.unauth();
                        hideModal("logoutModal");
                    } else {
                        $scope.showError = true;
                        $scope.errorMessage = "Wrong Password";
                        displayMessage("Wrong password");
                    }
                }

                 /**
                 * Update the User as logged out
                 * @param {String} id 
                 * @return {none} none
                 */
                function logoutUpdate() {
                         var usersRef = ref.child($scope.loggedin).child("children").child(removeRegexForMac(ip));
                    usersRef.update({
                        stop: "no",
                        status: "loggedout",
                        currentUrl: "none",
                        time: getCurrentTime(),
                        date: getCurrentDate()
                    });
                }



     			/**
                 * Attach an asynchronous callback to read the data at our posts reference
                 * @param {none} none
                 * @param {none} none
                 * @return {none} none
                 */
               function runIsItDisabled(){
               	       	var usersRef = ref.child($scope.loggedin).child("children").child(removeRegexForMac(ip)).on("value", function (snapshot2) {

 $scope.stop = snapshot2.val()["stop"];
 if ($scope.stop == "yes"){
document.getElementById("blank").style.display="block";
 } else {
 	document.getElementById("blank").style.display="none";
 }
 console.log($scope.stop);
       	});
               }
                /**
                 * Attach an asynchronous callback to read the data at our posts reference
                 * @param {none} none
                 * @param {none} none
                 * @return {none} none
                 */
                 function runUpdateFromDatabase(){
                try {
                    ref.child(authData.uid).on("value", function (snapshot) {

         				

                        for (var q in snapshot.val()["list"]) {
                            if (snapshot.val()["list"][q]["type"] === "white") {
                                $scope.whiteList.push({
                                    url: q.replace(/['"]+/g, '')
                                });
                            } else {
                                $scope.blackList.push({
                                    url: q.replace(/['"]+/g, '')
                                });
                            }
                        }


                        //console.log($scope.blackList);
                        //console.log($scope.whiteList);

                        saveCurrentUrl($('.iframe.active').attr('src'));
                    }, function (errorObject) {
                        console.log("The read failed: " + errorObject.code);
                    });
                } catch (e) {
                    // statements to handle any exceptions
                }
}


                /**
                 * Check if the user is logged in or not
                 * @param  {none} none
                 * @param  {none} none
                 * @return {none} none
                 */
                function authDataCallback(authData) {
                    if (authData) {
                        $scope.loggedin = authData.uid;
                        console.log("User " + authData.uid + " is logged in with " + authData.provider);
                    } else {
                        $scope.loggedin = null;
                        console.log("User is logged out");
                    }
                }


                ref.onAuth(authDataCallback);
            });
