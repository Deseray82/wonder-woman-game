// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level 1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010000000000000000000101010102010000000101010001010000010101000104040401000000000000000101010001010101010100010101010101010100010100000101000000000000010101000000000001010101010101000101010001010100000000000001010001010100010101000101010100010100010101000000010000000101000101000101010101000101010001010001010001010000000001010100010100010100010100010101000000000101000101000101000101010001010101010001010001010000000000010101010100000000010101010101010101010101010101000101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . 2 
. . . . . . . 2 2 2 . 2 2 . . 2 
. 2 . 2 2 . . . . . . . . . . 2 
2 2 . 2 2 . . . . . 2 2 2 2 2 2 
2 2 . 2 2 . . . 2 . . . . . . 2 
2 2 . . . . . 2 . . 2 . 2 2 . 2 
2 2 . . . . . . . . . . . 2 . 2 
2 2 . . . . . 2 2 2 2 . . . . 2 
2 2 . . . . . . . 2 2 . 2 2 . 2 
2 2 2 2 . . . . . . . . 2 2 . 2 
2 . . . . . . . . 2 2 . 2 2 . 2 
2 . . . . . . . . 2 2 . 2 2 . 2 
2 . . . . . 2 2 2 2 2 . 2 2 . 2 
2 . . . . . 2 . . . 2 . . . . 2 
2 2 2 2 2 2 2 2 . . 2 2 2 2 . 2 
. . . . . . . . . . . . . 2 2 2 
`, [myTiles.transparency16,sprites.builtin.coral0,sprites.builtin.oceanSand14,myTiles.tile1,sprites.builtin.oceanDepths0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
