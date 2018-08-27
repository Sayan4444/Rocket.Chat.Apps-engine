export enum AppMethod {
    _CONSTRUCTOR = 'constructor',
    _COMMAND_EXECUTOR = 'executor',
    _COMMAND_PREVIEWER = 'previewer',
    _COMMAND_PREVIEW_EXECUTOR = 'executePreviewItem',
    INITIALIZE = 'initialize',
    ONENABLE = 'onEnable',
    ONDISABLE = 'onDisable',
    ONSETTINGUPDATED = 'onSettingUpdated',
    SETSTATUS = 'setStatus',
    // Message handlers
    CHECKPREMESSAGESENTPREVENT = 'checkPreMessageSentPrevent',
    EXECUTEPREMESSAGESENTPREVENT = 'executePreMessageSentPrevent',
    CHECKPREMESSAGESENTEXTEND = 'checkPreMessageSentExtend',
    EXECUTEPREMESSAGESENTEXTEND = 'executePreMessageSentExtend',
    CHECKPREMESSAGESENTMODIFY = 'checkPreMessageSentModify',
    EXECUTEPREMESSAGESENTMODIFY = 'executePreMessageSentModify',
    CHECKPOSTMESSAGESENT = 'checkPostMessageSent',
    EXECUTEPOSTMESSAGESENT = 'executePostMessageSent',
    CHECKPREMESSAGEDELETEPREVENT = 'checkPreMessageDeletePrevent',
    EXECUTEPREMESSAGEDELETEPREVENT = 'executePreMessageDeletePrevent',
    CHECKPOSTMESSAGEDELETED = 'checkPostMessageDeleted',
    EXECUTEPOSTMESSAGEDELETED = 'executePostMessageDeleted',
    // Room handlers
    CHECKPREROOMCREATEPREVENT = 'checkPreRoomCreatePrevent',
    EXECUTEPREROOMCREATEPREVENT = 'executePreRoomCreatePrevent',
    CHECKPREROOMCREATEEXTEND = 'checkPreRoomCreateExtend',
    EXECUTEPREROOMCREATEEXTEND = 'executePreRoomCreateExtend',
    CHECKPREROOMCREATEMODIFY = 'checkPreRoomCreateModify',
    EXECUTEPREROOMCREATEMODIFY = 'executePreRoomCreateModify',
    CHECKPOSTROOMCREATE = 'checkPostRoomCreate',
    EXECUTEPOSTROOMCREATE = 'executePostRoomCreate',
    CHECKPREROOMDELETEPREVENT = 'checkPreRoomDeletePrevent',
    EXECUTEPREROOMDELETEPREVENT = 'executePreRoomDeletePrevent',
    CHECKPOSTROOMDELETED = 'checkPostRoomDeleted',
    EXECUTEPOSTROOMDELETED = 'executePostRoomDeleted',
}
