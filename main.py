def on_overlap_tile(sprite, location):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.builtin.ocean_depths0,
    on_overlap_tile)

mySprite = sprites.create(assets.image("""
    Pinky
"""), SpriteKind.player)
controller.move_sprite(mySprite, 120, 120)
scene.set_background_color(8)
tiles.set_tilemap(tilemap("""
    level 1
"""))
tiles.place_on_random_tile(mySprite, sprites.builtin.ocean_sand14)
info.start_countdown(25)
scene.camera_follow_sprite(mySprite)