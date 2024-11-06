import os
mappa_utvonal = 'fajl_beolvasas\img'

fajlok = os.listdir(mappa_utvonal)
with open("fajl_beolvasas\img.json", "w", encoding="utf-8")as infile:
    infile.write("{\n")
    i=1
    for fajl in fajlok:
        if i != len(fajlok):
            infile.write(f"\"{i}\": \"{fajl}\",\n")
        else:
            pass
            #infile.write(f"{i}: \"{fajl}\"\n")
        i+=1
    infile.write("}")
    

print(fajlok)