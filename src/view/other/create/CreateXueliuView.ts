/**
 * CreateXueliuView
 * @Author Ace.c
 * @Create 2016-12-06 18:24
 */
class CreateXueliuView extends BaseSprite {

    private btn_ju: eui.Image;
    private btn_ju4: eui.Image;
    private lab_ju4: eui.Label;
    private btn_ju8: eui.Image;
    private lab_ju8: eui.Label;

    private btn_fan0: eui.RadioButton;
    private btn_fan1: eui.RadioButton;
    private btn_fan2: eui.RadioButton;

    private btn_rule0: eui.CheckBox;
    private btn_rule1: eui.CheckBox;
    private btn_rule2: eui.CheckBox;
    private btn_rule3: eui.CheckBox;
    private btn_rule4: eui.CheckBox;
    private btn_rule5: eui.CheckBox;
    private btn_rule6: eui.CheckBox;
    private btn_rule7: eui.CheckBox;

    private ju: number;
    private rate: GameRate;

    private ruleVo: GameRuleVo;

    public constructor() {
        super();

        this.skinName = "CreateXueliuViewSkin";
    }

    public childrenCreated() {
        super.childrenCreated();

        this.ruleVo = game.ruleVo;

        this.btn_ju.touchEnabled = false;

        this.ju = 4;
        this.rate = 2;

        this.update();

        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);

        // this.btn_ju4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        // this.btn_ju8.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        //
        // this.btn_fan0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        // this.btn_fan1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        // this.btn_fan2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        //
        // this.btn_rule0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        // this.btn_rule1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        // this.btn_rule2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        // this.btn_rule3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        // this.btn_rule4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        // this.btn_rule5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        // this.btn_rule6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
        // this.btn_rule7.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
    }

    private clickHandler(e: egret.TouchEvent) {
        switch (e.target) {
            case this.btn_ju4:
                this.ju = 4;
                break;
            case this.btn_ju8:
                this.ju = 8;
                break;
            case this.btn_fan0:
                this.rate = GameRate.rate_2;
                break;
            case this.btn_fan1:
                this.rate = GameRate.rate_3;
                break;
            case this.btn_fan2:
                this.rate = GameRate.rate_4;
                break;
        }

        this.update();
    }

    update() {
        switch (this.ju) {
            case 4:
                this.btn_ju.x = 0;
                this.lab_ju4.textColor = 0xff2f19;
                this.lab_ju8.textColor = 0xA07A4B;
                break;
            case 8:
                this.btn_ju.x = 400;
                this.lab_ju4.textColor = 0xA07A4B;
                this.lab_ju8.textColor = 0xA07A4B;
                break;
        }

        this.ruleVo.ju = this.ju;
        this.ruleVo.rate = this.rate;
        this.ruleVo.rules = [];

        this.ruleVo.rules.push(this.ruleVo.law);
        this.ruleVo.rules.push([19, this.rate]);

        var box: eui.CheckBox;
        for (var i: number = 0; i <= 7; i++) {
            box = this["btn_rule" + i];
            if (box && box.selected) {
                switch (i) {
                    case 0:
                        this.ruleVo.rules.push(GameRule.zimojiadi);
                        break;
                    case 1:
                        this.ruleVo.rules.push(GameRule.zimojiafan);
                        break;
                    case 2:
                        this.ruleVo.rules.push(GameRule.dianganghua_pao);
                        break;
                    case 3:
                        this.ruleVo.rules.push(GameRule.dianganghua_zimo);
                        break;
                    case 4:
                        this.ruleVo.rules.push(GameRule.huansanzhang);
                        break;
                    case 5:
                        this.ruleVo.rules.push(GameRule.yaojiujiangdui);
                        break;
                    case 6:
                        this.ruleVo.rules.push(GameRule.menqingzhongzhang);
                        break;
                    case 7:
                        this.ruleVo.rules.push(GameRule.tiandihu);
                        break;
                }
            }
        }
    }
}