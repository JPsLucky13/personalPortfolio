let akuma = document.getElementById('akuma');
akuma.hidden = true;
let showingAkuma = false;

function showAlternatePic()
{
    if(!showingAkuma)
    {
        document.getElementById('headShot').hidden = true;
        akuma.hidden = false;
        showingAkuma = true;
    }
    else
    {
        document.getElementById('headShot').hidden = false;
        akuma.hidden = true;
        showingAkuma = false;
    }
}
