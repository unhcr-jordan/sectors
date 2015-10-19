 /* This function map the indicator into it's relevant dashboard style */

//National level dashboard styles (possible combinations)
//Prefix: N
//Disaggregation
//A: (Population, Gender, Age)
//B: (Population, Gender)
//C: (Population, Age) // But there may not be anything like this because when we have age we usually should have gender as well
//D: (Population)
//E: (None) //For other type of indicators than the population

//Geo-level (The idea is to have only the governorate level map)
//1: (No Map) //If the indicator is at the country level
//2: (Map) //If the indicator is reported at the governorate level and below
//------------------------------------

//Governorate level dashboard styles (possible combinations)
//Prefix: N
//Disaggregation
//A: (Population, Gender, Age)
//B: (Population, Gender)
//C: (Population, Age) // But there may not be anything like this because when we have age we usually should have gender as well
//D: (Population)
//E: (None) //For other type of indicators than the population

//Geo-level (The idea is to have only the governorate level map)
//0: (No field level dashboard) //If the indicator is reported at the country level
//1: (No Map) //If the indicator is reported at the governorate level
//2: (Map) //If the indicator is reported at the caza level (Caza level map only)
//3: (Map) //If the indicator is reported at the cadastral or site level (Caza level map and Cadastral level map)
//------------------------------------
 
 
var ind2national = {
	'# awareness sessions on available services':'NE2',
	'# beneficiaries (clearance and demarcation)':'ND2',
	'# community-self management structures established (IS, CC, CS)':'ND2',
	'# community-self management structures established (outside of CS)':'ND2',
	'# complaint and feedback mechanisms established':'NE1',
	'# detention visits conducted':'NE2',
	'# individual interventions at border crossings':'ND2',
	'# individuals assisted in detention':'NA2',
	'# individuals benefitting from life-skills activities':'NA2',
	'# individuals counselled on HLP matters':'ND2',
	'# individuals counselled on legal matters other than HLP':'ND2',
	'# individuals counselled on obtaining birth certificates':'ND2',
	'# individuals counselled on obtaining legal stay':'ND2',
	'# individuals counselled on obtaining other documentation':'ND2',
	'# individuals from community self-management structures trained':'NB2',
	'# individuals identified and referred through community structures':'NA2',
	'# individuals participating in community center and community-based activities':'NA2',
	'# individuals participating in SDC activities':'NA2',
	'# individuals receiving legal counselling in detention':'NA2',
	'# individuals represented in in courts, administrative bodies or informal conflict resolution mechanisms':'ND2',
	'# individuals trained on collective site managementand coordination':'NB2',
	'# individuals trained on community based protection':'NB2',
	'# information campaigns on available services':'NE2',
	'# legal awareness sessions':'NE2',
	'# legal information campaigns':'NE2',
	'# mediation interventions - HLP':'ND2',
	'# mediation interventions - HLP (agreement)':'ND2',
	'# mediation interventions - non-HLP':'ND2',
	'# mediation interventions - non-HLP (agreement)':'ND2',
	'# monitoring visits, including to collective sites':'NE2',
	'# of assessments':'NE1',
	'# of border officials trained':'NE1',
	'# of border posts receiving technical / institutional support':'NE1',
	'# of capacity building initiatives (Documentation)':'NE1',
	'# of capacity building initiatives(Technical / institutional support to law enforcement)':'NE1',
	'# of community members engaged in self-management structures':'NB2',
	'# of days border monitoring staff are present at border crossings':'NE2',
	'# of high-level advocacy events on access to territory issues':'NE1',
	'# of high-level advocacy events on protection issues':'NE1',
	'# of individuals reached through Mine Risk Education':'NB2',
	'# of individuals registered (incl. through mobile)':'ND2',
	'# of individuals submitted (RST & Humanitarian Admission)':'ND1',
	'# of individuals departed (RST & Humanitarian Admission)': 'ND1',
	'# of individuals supported through provision of emergency cash assistance':'NB2',
	'# of individuals transported to registration centres':'ND2',
	'# of individuals verified/renewed':'ND2',
	'# of Mine Risk Education sessions delivered':'NE2',
	'# of MOSA contracted NGOs receiving support':'NE1',
	'# of MOSA SDCs receiving support':'NE1',
	'# of persons capacitated in provision of legal aid, including on mediation and other informal dispute resolution techniques':'NE1',
	'# of persons from civil society trained on protection issues':'NE1',
	'# of persons trained on identification / referral / case management':'NE1',
	'# of persons with disabilities and impairment supported':'NA2',
	'# of press releases and material on access to territory issues published':'NE1',
	'# of protection referrals which were not identified by the community':'NA2',
	'# of public officials trained on protection issues':'NE1',
	'# of PWSN (excl. children and SGBV) identified and supported':'NA2',
	'# of square meters cleared':'NE2',
	'# of square meters demarcated':'NE2',
	'# of strategic litigation cases represented':'NE1',
	'# press releases and material on protection issues published':'NE1',
	'# protection interventions':'NA2',
	'# staff trained in resettlement procedures':'NE1',
	'LebRet # of individuals profiled/registered':'NA2',
	'PRS # of individuals recorded':'NA2',
	'Total USD value of cash provided':'NB2'
	}
	
var ind2field = {
	'# awareness sessions on available services':'FE3',
	'# beneficiaries (clearance and demarcation)':'FD2',
	'# community-self management structures established (IS, CC, CS)':'FD3',
	'# community-self management structures established (outside of CS)':'FD3',
	'# complaint and feedback mechanisms established':'FE0',
	'# detention visits conducted':'FE3',
	'# individual interventions at border crossings':'FD3',
	'# individuals assisted in detention':'FA3',
	'# individuals benefitting from life-skills activities':'FA3',
	'# individuals counselled on HLP matters':'FD1',
	'# individuals counselled on legal matters other than HLP':'FD1',
	'# individuals counselled on obtaining birth certificates':'FD1',
	'# individuals counselled on obtaining legal stay':'FD1',
	'# individuals counselled on obtaining other documentation':'FD1',
	'# individuals from community self-management structures trained':'FB3',
	'# individuals identified and referred through community structures':'FA3',
	'# individuals participating in community center and community-based activities':'FA3',
	'# individuals participating in SDC activities':'FA3',
	'# individuals receiving legal counselling in detention':'FA3',
	'# individuals represented in in courts, administrative bodies or informal conflict resolution mechanisms':'FD1',
	'# individuals trained on collective site managementand coordination':'FB3',
	'# individuals trained on community based protection':'FB3',
	'# information campaigns on available services':'FE3',
	'# legal awareness sessions':'FE2',
	'# legal information campaigns':'FE2',
	'# mediation interventions - HLP':'FD3',
	'# mediation interventions - HLP (agreement)':'FD3',
	'# mediation interventions - non-HLP':'FD3',
	'# mediation interventions - non-HLP (agreement)':'FD3',
	'# monitoring visits, including to collective sites':'FE3',
	'# of assessments':'FE0',
	'# of border officials trained':'FE0',
	'# of border posts receiving technical / institutional support':'FE0',
	'# of capacity building initiatives (Documentation)':'FE0',
	'# of capacity building initiatives(Technical / institutional support to law enforcement)':'FE0',
	'# of community members engaged in self-management structures':'FB3',
	'# of days border monitoring staff are present at border crossings':'FE3',
	'# of high-level advocacy events on access to territory issues':'FE0',
	'# of high-level advocacy events on protection issues':'FE0',
	'# of individuals reached through Mine Risk Education':'FB2',
	'# of individuals registered (incl. through mobile)':'FD2',
	'# of individuals submitted (RST & Humanitarian Admission)':'FD0',
	'# of individuals departed (RST & Humanitarian Admission)': 'FD0',
	'# of individuals supported through provision of emergency cash assistance':'FB2',
	'# of individuals transported to registration centres':'FD3',
	'# of individuals verified/renewed':'FD2',
	'# of Mine Risk Education sessions delivered':'FE2',
	'# of MOSA contracted NGOs receiving support':'FE0',
	'# of MOSA SDCs receiving support':'FE0',
	'# of persons capacitated in provision of legal aid, including on mediation and other informal dispute resolution techniques':'FE0',
	'# of persons from civil society trained on protection issues':'FE0',
	'# of persons trained on identification / referral / case management':'FE0',
	'# of persons with disabilities and impairment supported':'FA2',
	'# of press releases and material on access to territory issues published':'FE0',
	'# of protection referrals which were not identified by the community':'FA3',
	'# of public officials trained on protection issues':'FE0',
	'# of PWSN (excl. children and SGBV) identified and supported':'FA2',
	'# of square meters cleared':'FE2',
	'# of square meters demarcated':'FE2',
	'# of strategic litigation cases represented':'FE0',
	'# press releases and material on protection issues published':'FE0',
	'# protection interventions':'FA3',
	'# staff trained in resettlement procedures':'FE0',
	'LebRet # of individuals profiled/registered':'FA2',
	'PRS # of individuals recorded':'FA1',
	'Total USD value of cash provided':'FB2'
}

var ind2unit = {
	'# awareness sessions on available services':'sessions',
	'# beneficiaries (clearance and demarcation)':'individuals',
	'# community-self management structures established (IS, CC, CS)':'community self-management structures',
	'# community-self management structures established (outside of CS)':'community self-management structures',
	'# complaint and feedback mechanisms established':'complaint/feedback mechanisms',
	'# detention visits conducted':'visits',
	'# individual interventions at border crossings':'interventions',
	'# individuals assisted in detention':'individuals',
	'# individuals benefitting from life-skills activities':'individuals',
	'# individuals counselled on HLP matters':'individuals',
	'# individuals counselled on legal matters other than HLP':'individuals',
	'# individuals counselled on obtaining birth certificates':'individuals',
	'# individuals counselled on obtaining legal stay':'individuals',
	'# individuals counselled on obtaining other documentation':'individuals',
	'# individuals from community self-management structures trained':'individuals',
	'# individuals identified and referred through community structures':'individuals',
	'# individuals participating in community center and community-based activities':'individuals',
	'# individuals participating in SDC activities':'individuals',
	'# individuals receiving legal counselling in detention':'individuals',
	'# individuals represented in in courts, administrative bodies or informal conflict resolution mechanisms':'individuals',
	'# individuals trained on collective site managementand coordination':'individuals',
	'# individuals trained on community based protection':'individuals',
	'# information campaigns on available services':'campaigns',
	'# legal awareness sessions':'sessions',
	'# legal information campaigns':'campaigns',
	'# mediation interventions - HLP':'cases',
	'# mediation interventions - HLP (agreement)':'cases',
	'# mediation interventions - non-HLP':'cases',
	'# mediation interventions - non-HLP (agreement)':'cases',
	'# monitoring visits, including to collective sites':'visits',
	'# of assessments':'assessments',
	'# of border officials trained':'individuals',
	'# of border posts receiving technical / institutional support':'border posts',
	'# of capacity building initiatives (Documentation)':'initiatives',
	'# of capacity building initiatives(Technical / institutional support to law enforcement)':'initiatives',
	'# of community members engaged in self-management structures':'individuals',
	'# of days border monitoring staff are present at border crossings':'man-days',
	'# of high-level advocacy events on access to territory issues':'events',
	'# of high-level advocacy events on protection issues':'events',
	'# of individuals reached through Mine Risk Education':'individuals',
	'# of individuals registered (incl. through mobile)':'individuals',
	'# of individuals submitted (RST & Humanitarian Admission)':'individuals',
	'# of individuals departed (RST & Humanitarian Admission)': 'individuals',
	'# of individuals supported through provision of emergency cash assistance':'individuals',
	'# of individuals transported to registration centres':'individuals',
	'# of individuals verified/renewed':'individuals',
	'# of Mine Risk Education sessions delivered':'sessions',
	'# of MOSA contracted NGOs receiving support':'MoSA - NGOs',
	'# of MOSA SDCs receiving support':'MoSA SDCs',
	'# of persons capacitated in provision of legal aid, including on mediation and other informal dispute resolution techniques':'individuals',
	'# of persons from civil society trained on protection issues':'individuals',
	'# of persons trained on identification / referral / case management':'individuals',
	'# of persons with disabilities and impairment supported':'individuals',
	'# of press releases and material on access to territory issues published':'press releases/materials',
	'# of protection referrals which were not identified by the community':'referrals',
	'# of public officials trained on protection issues':'individuals',
	'# of PWSN (excl. children and SGBV) identified and supported':'individuals',
	'# of square meters cleared':'sq.meter',
	'# of square meters demarcated':'sq.meter',
	'# of strategic litigation cases represented':'cases',
	'# press releases and material on protection issues published':'press releases/materials',
	'# protection interventions':'individuals',
	'# staff trained in resettlement procedures':'individuals',
	'LebRet # of individuals profiled/registered':'individuals',
	'PRS # of individuals recorded':'individuals',
	'Total USD value of cash provided':'USD'
}

var ind2target= {
	'# awareness sessions on available services':'0',
	'# beneficiaries (clearance and demarcation)':'0',
	'# community-self management structures established (IS, CC, CS)':'0',
	'# community-self management structures established (outside of CS)':'0',
	'# complaint and feedback mechanisms established':'0',
	'# detention visits conducted':'0',
	'# individual interventions at border crossings':'0',
	'# individuals assisted in detention':'0',
	'# individuals benefitting from life-skills activities':'0',
	'# individuals counselled on HLP matters':'10000',
	'# individuals counselled on legal matters other than HLP':'10000',
	'# individuals counselled on obtaining birth certificates':'10000',
	'# individuals counselled on obtaining legal stay':'10000',
	'# individuals counselled on obtaining other documentation':'10000',
	'# individuals from community self-management structures trained':'10000',
	'# individuals identified and referred through community structures':'10000',
	'# individuals participating in community center and community-based activities':'0',
	'# individuals participating in SDC activities':'0',
	'# individuals receiving legal counselling in detention':'10000',
	'# individuals represented in in courts, administrative bodies or informal conflict resolution mechanisms':'0',
	'# individuals trained on collective site managementand coordination':'0',
	'# individuals trained on community based protection':'0',
	'# information campaigns on available services':'0',
	'# legal awareness sessions':'0',
	'# legal information campaigns':'0',
	'# mediation interventions - HLP':'0',
	'# mediation interventions - HLP (agreement)':'0',
	'# mediation interventions - non-HLP':'0',
	'# mediation interventions - non-HLP (agreement)':'0',
	'# monitoring visits, including to collective sites':'0',
	'# of assessments':'0',
	'# of border officials trained':'0',
	'# of border posts receiving technical / institutional support':'0',
	'# of capacity building initiatives (Documentation)':'0',
	'# of capacity building initiatives(Technical / institutional support to law enforcement)':'0',
	'# of community members engaged in self-management structures':'0',
	'# of days border monitoring staff are present at border crossings':'0',
	'# of high-level advocacy events on access to territory issues':'0',
	'# of high-level advocacy events on protection issues':'0',
	'# of individuals reached through Mine Risk Education':'0',
	'# of individuals registered (incl. through mobile)':'0',
	'# of individuals submitted (RST & Humanitarian Admission)':'0',
	'# of individuals departed (RST & Humanitarian Admission)': '0',
	'# of individuals supported through provision of emergency cash assistance':'0',
	'# of individuals transported to registration centres':'0',
	'# of individuals verified/renewed':'0',
	'# of Mine Risk Education sessions delivered':'0',
	'# of MOSA contracted NGOs receiving support':'0',
	'# of MOSA SDCs receiving support':'0',
	'# of persons capacitated in provision of legal aid, including on mediation and other informal dispute resolution techniques':'0',
	'# of persons from civil society trained on protection issues':'0',
	'# of persons trained on identification / referral / case management':'0',
	'# of persons with disabilities and impairment supported':'0',
	'# of press releases and material on access to territory issues published':'0',
	'# of protection referrals which were not identified by the community':'0',
	'# of public officials trained on protection issues':'0',
	'# of PWSN (excl. children and SGBV) identified and supported':'0',
	'# of square meters cleared':'0',
	'# of square meters demarcated':'0',
	'# of strategic litigation cases represented':'0',
	'# press releases and material on protection issues published':'0',
	'# protection interventions':'0',
	'# staff trained in resettlement procedures':'0',
	'LebRet # of individuals profiled/registered':'0',
	'PRS # of individuals recorded':'0',
	'Total USD value of cash provided':'0'
}