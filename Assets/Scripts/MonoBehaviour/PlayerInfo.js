import System.IO;

static var nameOfPlayer:String;
static var first:Pokemon;
static var second:Pokemon;
static var third:Pokemon;
static var fourth:Pokemon;
static var fifth:Pokemon;
static var sixth:Pokemon;

var filePath = "/PokemonMixte/save.txt";

function Update() {
    if (Input.GetKeyDown("r")) {
        SaveData(filePath);
    }
    if (Input.GetKeyDown("f")) {
        ReadFile(filePath);
    }
}
 
function SaveData(filepathIncludingFileName : String)
{
    var sw : StreamWriter = new StreamWriter(filepathIncludingFileName);
    sw.WriteLine(nameOfPlayer);
    sw.WriteLine(first.surname);
    sw.Flush();
    sw.Close();
}
 
function ReadFile(filepathIncludingFileName : String) {
    sr = new File.OpenText(filepathIncludingFileName);
 
    input = "";
    while (true) {
        input = sr.ReadLine();
        if (input == null) { break; }
        print(input);
    }
    sr.Close();
}