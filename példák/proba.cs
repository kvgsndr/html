class Torta 
{ private int emeletek; 
private bool kremmel_kenve; 
public Torta() { emeletek = 1; kremmel_kenve = false; } 
public Torta(int emelet, bool krem) 
{ emeletek = emelet; kremmel_kenve = krem; } 
public void Ujemelet() { emeletek += 1; } 
public bool KremmelMegkenve() 
{ if (kremmel_kenve == false) { kremmel_kenve = true; return true; } else return false; } public int Kaloria() { if (kremmel_kenve == true) { return emeletek * 1000 * 2; } else return emeletek * 10000; } public void stringbe() { Console.WriteLine($"Emeletek: {emeletek} Krémmel kenve: {kremmel_kenve} Kalória{Kaloria}"); } }