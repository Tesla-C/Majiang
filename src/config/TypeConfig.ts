
/**
 * 游戏类型
 */
enum GameType {
    baicheng = 1, shenyang, sichuan = 100
}

/**
 * 连接状态
 */
enum ConnectStatus {
    connecting, connected, connectFail, connectOld
}

/**
 * 状态
 */
enum StateType {
    ready = 1, continue, shuffle, gamestart, ting, fen, win, gameover, over, replay
}

/**
 * 游戏状态
 */
enum GameStatus {
    unknow, changeThree, missing, gamestart
}

/**
 * 卡牌类型(1万 2条 3筒 4中发白)
 */
enum PaiType {
    unknow, wan = 1, tiao, tong, zi
}

/**
 * 换三张类型
 */
enum ChangeThreeType {
    clockwise = 1, anti_clockwise, other
}

/**
 * 升牌类型
 */
enum CardRaiseMode {
    funcmenu, changeThree
}

/**
 * 中断类型
 */
enum InterruptType {
    chi, peng, minggang, angang, zigang, fenggang, ting, hu, gangshangkaihua, yipaoduoxiang, hujiaozhuanyi
}