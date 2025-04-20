class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 400;
        this.bodyY = 300;

        this.rightLegX = 480;
        this.rightLegY = 420;

        this.leftLegX = 320;
        this.leftLegY = 420;

        this.rightArmX = 510;
        this.rightArmY = 330;

        this.leftArmX = 290;
        this.leftArmY = 330;
        
        this.eyeX = 400;
        this.eyeY = 280;

        this.mouthX = 400;
        this.mouthY = 350;

        this.hornLeftX = 265;
        this.hornLeftY = 300;

        this.hornRightX = 535;
        this.hornRightY = 300;
        
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.hornRight = this.add.sprite(this.hornRightX, this.hornRightY, "monsterParts", "detail_red_horn_large.png");
        my.sprite.hornLeft = this.add.sprite(this.hornLeftX, this.hornLeftY, "monsterParts", "detail_red_horn_large.png");
        my.sprite.hornLeft.flipX = true;

        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_yellowC.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_yellowC.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm.angle = -30;
        my.sprite.leftArm.angle = 30;
        my.sprite.rightArm.setScale(0.85);
        my.sprite.leftArm.setScale(0.85);

        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_yellowA.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_yellowA.png");
        my.sprite.leftLeg.flipX = true;

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_human.png");
        my.sprite.eye.setScale(1.1);

        my.sprite.smile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthA.png");

        my.sprite.smile.visible = false;

        my.sprite.fang = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthB.png");

        //event handling for smile vs fang

        this.input.keyboard.on('keydown-S', () => {
            my.sprite.smile.visible = true;
            my.sprite.fang.visible = false;
        })

        this.input.keyboard.on('keydown-F', () => {
            my.sprite.smile.visible = false;
            my.sprite.fang.visible = true;
        })

        this.UP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.DOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        //polling input for movement
        if (this.UP.isDown) {
            for (const spr in my.sprite) {
                my.sprite[spr].y -= 2;
            }

        } 
        if (this.DOWN.isDown) {
            for (const spr in my.sprite) {
                my.sprite[spr].y += 2;
            }
        }
        
        

       
    }

}