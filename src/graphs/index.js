export const kgSample = `
digraph {
    rankdir=LR
    nodesep=0.6
    bgcolor="none"
    edge [minlen="3"]
    graph [class="knowledge-graph"]

    s01 [shape="circle" xlabel="Graphic Parcel Register 2015 \n (shapefile)" label=""]
    s02 [shape="circle" xlabel="Graphic Parcel Register 2016 \n (shapefile)" label=""]
    s03 [shape="circle" xlabel="Graphic Parcel Register 2017 \n (shapefile)" label=""]
    s04 [shape="circle" xlabel="Graphic Parcel Register 2018 \n (shapefile)" label=""]
    s05 [shape="circle" xlabel="Graphic Parcel Register 2019 \n (shapefile)" label=""]
    s07 [shape="rectangle" style="rounded,filled" xlabel="Data merging" label=""]
    s08 [shape="circle" xlabel="Graphic Parcel Register \n 2015-2019 \n (.csv)" label=""]
    s09 [shape="circle" xlabel="French administrative divisions\n (.geojson)" label=""]
    s10 [shape="rectangle" style="rounded,filled" xlabel="Spatial Join" label=""]
    s11 [shape="circle" xlabel="Soil Carbon Stock\n(WMS webservice)" label=""]
    s12 [shape="circle" xlabel="Soil typology\n (WMS webservice)" label=""]
    s13 [shape="rectangle" style="rounded,filled" xlabel="Vectorisation" label=""]
    s14 [shape="rectangle" style="rounded,filled" xlabel="Vectorisation" label=""]
    s15 [shape="circle" xlabel="Soil typology\n(shapefile)" label=""]
    s16 [shape="circle" xlabel="Soil Carbon Stock\n(shapefile)" label=""]
    s17 [shape="circle" xlabel="Dataset\n(.csv)" label=""]
    s20 [shape="circle" xlabel="Organic crop areas and Livestock\n(.xlsx)" label=""]
    s22 [shape="circle" xlabel="French agricultural statistics\n (.csv)" label=""]
    s21 [shape="circle" xlabel="Company Identification database\n(API)" label=""]
    s23 [shape="rectangle" style="rounded,filled" xlabel="Data Processing" label=""]
    s24 [shape="rectangle" style="rounded,filled" xlabel="Agricultural companies \nrequest" label=""]
    s25 [shape="rectangle" style="rounded,filled" xlabel="Data Processing" label=""]
    s26 [shape="circle" xlabel="French agricultural statistics\n(.csv)" label=""]
    s27 [shape="circle" xlabel="Agricultural companies\n(.csv)" label=""]
    s28 [shape="circle" xlabel="Organic crop areas and Livestock\n(.csv)" label=""]
    s29 [shape="rectangle" style="rounded,filled" xlabel="Data Join" label=""]
    s30 [shape="circle" xlabel="Dataset\n(.csv)" label=""]
    s31 [shape="rectangle" style="rounded,filled" xlabel="Data integration" label=""]
    s32 [shape="circle" xlabel="Knowledge" label=""]
    s01 -> s07
    s02 -> s07
    s03 -> s07
    s04 -> s07
    s05 -> s07
    s07 -> s08
    s11 -> s13
    s12 -> s14
    s14 -> s15
    s13 -> s16
    s09 -> s10
    s08 -> s10
    s10 -> s17
    s15 -> s10
    s16 -> s10
    s20 -> s23
    s21 -> s24
    s22 -> s25
    s25 -> s26
    s24 -> s27
    s23 -> s28
    s27 -> s29
    s28 -> s29
    s26 -> s29
    s29 -> s30
    s17 -> s31
    s31 -> s32
    s30 -> s31
}
`
