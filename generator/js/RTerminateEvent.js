
      // auto generated
      //var self;

      // class constructor:
      function RTerminateEvent() {
        

        // should be RTerminateEvent_BaseJs.call(this, engine):
        //RTerminateEvent.prototype = new RTerminateEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTerminateEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTerminateEvent);
            //}
          }
          else {
            qWarning("RTerminateEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTerminateEvent_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTerminateEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTerminateEvent);
  }

  
  else {
    
        print("RTerminateEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
        }
      }

      //RTerminateEvent.prototype = new RTerminateEvent_BaseJs(engine);
      //RTerminateEvent.prototype = new RTerminateEvent_Wrapper(engine);
      RTerminateEvent.prototype = new Object();

      RTerminateEvent.prototype.toString = function() {
          //return "RTerminateEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTerminateEvent [JS]";
        };
      RTerminateEvent.getObjectType = function() {
        return RJSType_RTerminateEvent.getIdStatic();
      };

      RTerminateEvent.prototype.getObjectType = function() {
        return RJSType_RTerminateEvent.getIdStatic();
      };

      RTerminateEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTerminateEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RTerminateEvent.None = RTerminateEvent_Wrapper.None;
RTerminateEvent.Timer = RTerminateEvent_Wrapper.Timer;
RTerminateEvent.MouseButtonPress = RTerminateEvent_Wrapper.MouseButtonPress;
RTerminateEvent.MouseButtonRelease = RTerminateEvent_Wrapper.MouseButtonRelease;
RTerminateEvent.MouseButtonDblClick = RTerminateEvent_Wrapper.MouseButtonDblClick;
RTerminateEvent.MouseMove = RTerminateEvent_Wrapper.MouseMove;
RTerminateEvent.KeyPress = RTerminateEvent_Wrapper.KeyPress;
RTerminateEvent.KeyRelease = RTerminateEvent_Wrapper.KeyRelease;
RTerminateEvent.FocusIn = RTerminateEvent_Wrapper.FocusIn;
RTerminateEvent.FocusOut = RTerminateEvent_Wrapper.FocusOut;
RTerminateEvent.FocusAboutToChange = RTerminateEvent_Wrapper.FocusAboutToChange;
RTerminateEvent.Enter = RTerminateEvent_Wrapper.Enter;
RTerminateEvent.Leave = RTerminateEvent_Wrapper.Leave;
RTerminateEvent.Paint = RTerminateEvent_Wrapper.Paint;
RTerminateEvent.Move = RTerminateEvent_Wrapper.Move;
RTerminateEvent.Resize = RTerminateEvent_Wrapper.Resize;
RTerminateEvent.Create = RTerminateEvent_Wrapper.Create;
RTerminateEvent.Destroy = RTerminateEvent_Wrapper.Destroy;
RTerminateEvent.Show = RTerminateEvent_Wrapper.Show;
RTerminateEvent.Hide = RTerminateEvent_Wrapper.Hide;
RTerminateEvent.Close = RTerminateEvent_Wrapper.Close;
RTerminateEvent.Quit = RTerminateEvent_Wrapper.Quit;
RTerminateEvent.ParentChange = RTerminateEvent_Wrapper.ParentChange;
RTerminateEvent.ParentAboutToChange = RTerminateEvent_Wrapper.ParentAboutToChange;
RTerminateEvent.ThreadChange = RTerminateEvent_Wrapper.ThreadChange;
RTerminateEvent.WindowActivate = RTerminateEvent_Wrapper.WindowActivate;
RTerminateEvent.WindowDeactivate = RTerminateEvent_Wrapper.WindowDeactivate;
RTerminateEvent.ShowToParent = RTerminateEvent_Wrapper.ShowToParent;
RTerminateEvent.HideToParent = RTerminateEvent_Wrapper.HideToParent;
RTerminateEvent.Wheel = RTerminateEvent_Wrapper.Wheel;
RTerminateEvent.WindowTitleChange = RTerminateEvent_Wrapper.WindowTitleChange;
RTerminateEvent.WindowIconChange = RTerminateEvent_Wrapper.WindowIconChange;
RTerminateEvent.ApplicationWindowIconChange = RTerminateEvent_Wrapper.ApplicationWindowIconChange;
RTerminateEvent.ApplicationFontChange = RTerminateEvent_Wrapper.ApplicationFontChange;
RTerminateEvent.ApplicationLayoutDirectionChange = RTerminateEvent_Wrapper.ApplicationLayoutDirectionChange;
RTerminateEvent.ApplicationPaletteChange = RTerminateEvent_Wrapper.ApplicationPaletteChange;
RTerminateEvent.PaletteChange = RTerminateEvent_Wrapper.PaletteChange;
RTerminateEvent.Clipboard = RTerminateEvent_Wrapper.Clipboard;
RTerminateEvent.Speech = RTerminateEvent_Wrapper.Speech;
RTerminateEvent.MetaCall = RTerminateEvent_Wrapper.MetaCall;
RTerminateEvent.SockAct = RTerminateEvent_Wrapper.SockAct;
RTerminateEvent.WinEventAct = RTerminateEvent_Wrapper.WinEventAct;
RTerminateEvent.DeferredDelete = RTerminateEvent_Wrapper.DeferredDelete;
RTerminateEvent.DragEnter = RTerminateEvent_Wrapper.DragEnter;
RTerminateEvent.DragMove = RTerminateEvent_Wrapper.DragMove;
RTerminateEvent.DragLeave = RTerminateEvent_Wrapper.DragLeave;
RTerminateEvent.Drop = RTerminateEvent_Wrapper.Drop;
RTerminateEvent.DragResponse = RTerminateEvent_Wrapper.DragResponse;
RTerminateEvent.ChildAdded = RTerminateEvent_Wrapper.ChildAdded;
RTerminateEvent.ChildPolished = RTerminateEvent_Wrapper.ChildPolished;
RTerminateEvent.ChildRemoved = RTerminateEvent_Wrapper.ChildRemoved;
RTerminateEvent.ShowWindowRequest = RTerminateEvent_Wrapper.ShowWindowRequest;
RTerminateEvent.PolishRequest = RTerminateEvent_Wrapper.PolishRequest;
RTerminateEvent.Polish = RTerminateEvent_Wrapper.Polish;
RTerminateEvent.LayoutRequest = RTerminateEvent_Wrapper.LayoutRequest;
RTerminateEvent.UpdateRequest = RTerminateEvent_Wrapper.UpdateRequest;
RTerminateEvent.UpdateLater = RTerminateEvent_Wrapper.UpdateLater;
RTerminateEvent.EmbeddingControl = RTerminateEvent_Wrapper.EmbeddingControl;
RTerminateEvent.ActivateControl = RTerminateEvent_Wrapper.ActivateControl;
RTerminateEvent.DeactivateControl = RTerminateEvent_Wrapper.DeactivateControl;
RTerminateEvent.ContextMenu = RTerminateEvent_Wrapper.ContextMenu;
RTerminateEvent.InputMethod = RTerminateEvent_Wrapper.InputMethod;
RTerminateEvent.TabletMove = RTerminateEvent_Wrapper.TabletMove;
RTerminateEvent.LocaleChange = RTerminateEvent_Wrapper.LocaleChange;
RTerminateEvent.LanguageChange = RTerminateEvent_Wrapper.LanguageChange;
RTerminateEvent.LayoutDirectionChange = RTerminateEvent_Wrapper.LayoutDirectionChange;
RTerminateEvent.Style = RTerminateEvent_Wrapper.Style;
RTerminateEvent.TabletPress = RTerminateEvent_Wrapper.TabletPress;
RTerminateEvent.TabletRelease = RTerminateEvent_Wrapper.TabletRelease;
RTerminateEvent.OkRequest = RTerminateEvent_Wrapper.OkRequest;
RTerminateEvent.HelpRequest = RTerminateEvent_Wrapper.HelpRequest;
RTerminateEvent.IconDrag = RTerminateEvent_Wrapper.IconDrag;
RTerminateEvent.FontChange = RTerminateEvent_Wrapper.FontChange;
RTerminateEvent.EnabledChange = RTerminateEvent_Wrapper.EnabledChange;
RTerminateEvent.ActivationChange = RTerminateEvent_Wrapper.ActivationChange;
RTerminateEvent.StyleChange = RTerminateEvent_Wrapper.StyleChange;
RTerminateEvent.IconTextChange = RTerminateEvent_Wrapper.IconTextChange;
RTerminateEvent.ModifiedChange = RTerminateEvent_Wrapper.ModifiedChange;
RTerminateEvent.MouseTrackingChange = RTerminateEvent_Wrapper.MouseTrackingChange;
RTerminateEvent.WindowBlocked = RTerminateEvent_Wrapper.WindowBlocked;
RTerminateEvent.WindowUnblocked = RTerminateEvent_Wrapper.WindowUnblocked;
RTerminateEvent.WindowStateChange = RTerminateEvent_Wrapper.WindowStateChange;
RTerminateEvent.ReadOnlyChange = RTerminateEvent_Wrapper.ReadOnlyChange;
RTerminateEvent.ToolTip = RTerminateEvent_Wrapper.ToolTip;
RTerminateEvent.WhatsThis = RTerminateEvent_Wrapper.WhatsThis;
RTerminateEvent.StatusTip = RTerminateEvent_Wrapper.StatusTip;
RTerminateEvent.ActionChanged = RTerminateEvent_Wrapper.ActionChanged;
RTerminateEvent.ActionAdded = RTerminateEvent_Wrapper.ActionAdded;
RTerminateEvent.ActionRemoved = RTerminateEvent_Wrapper.ActionRemoved;
RTerminateEvent.FileOpen = RTerminateEvent_Wrapper.FileOpen;
RTerminateEvent.Shortcut = RTerminateEvent_Wrapper.Shortcut;
RTerminateEvent.ShortcutOverride = RTerminateEvent_Wrapper.ShortcutOverride;
RTerminateEvent.WhatsThisClicked = RTerminateEvent_Wrapper.WhatsThisClicked;
RTerminateEvent.ToolBarChange = RTerminateEvent_Wrapper.ToolBarChange;
RTerminateEvent.ApplicationActivate = RTerminateEvent_Wrapper.ApplicationActivate;
RTerminateEvent.ApplicationActivated = RTerminateEvent_Wrapper.ApplicationActivated;
RTerminateEvent.ApplicationDeactivate = RTerminateEvent_Wrapper.ApplicationDeactivate;
RTerminateEvent.ApplicationDeactivated = RTerminateEvent_Wrapper.ApplicationDeactivated;
RTerminateEvent.QueryWhatsThis = RTerminateEvent_Wrapper.QueryWhatsThis;
RTerminateEvent.EnterWhatsThisMode = RTerminateEvent_Wrapper.EnterWhatsThisMode;
RTerminateEvent.LeaveWhatsThisMode = RTerminateEvent_Wrapper.LeaveWhatsThisMode;
RTerminateEvent.ZOrderChange = RTerminateEvent_Wrapper.ZOrderChange;
RTerminateEvent.HoverEnter = RTerminateEvent_Wrapper.HoverEnter;
RTerminateEvent.HoverLeave = RTerminateEvent_Wrapper.HoverLeave;
RTerminateEvent.HoverMove = RTerminateEvent_Wrapper.HoverMove;
RTerminateEvent.AcceptDropsChange = RTerminateEvent_Wrapper.AcceptDropsChange;
RTerminateEvent.ZeroTimerEvent = RTerminateEvent_Wrapper.ZeroTimerEvent;
RTerminateEvent.GraphicsSceneMouseMove = RTerminateEvent_Wrapper.GraphicsSceneMouseMove;
RTerminateEvent.GraphicsSceneMousePress = RTerminateEvent_Wrapper.GraphicsSceneMousePress;
RTerminateEvent.GraphicsSceneMouseRelease = RTerminateEvent_Wrapper.GraphicsSceneMouseRelease;
RTerminateEvent.GraphicsSceneMouseDoubleClick = RTerminateEvent_Wrapper.GraphicsSceneMouseDoubleClick;
RTerminateEvent.GraphicsSceneContextMenu = RTerminateEvent_Wrapper.GraphicsSceneContextMenu;
RTerminateEvent.GraphicsSceneHoverEnter = RTerminateEvent_Wrapper.GraphicsSceneHoverEnter;
RTerminateEvent.GraphicsSceneHoverMove = RTerminateEvent_Wrapper.GraphicsSceneHoverMove;
RTerminateEvent.GraphicsSceneHoverLeave = RTerminateEvent_Wrapper.GraphicsSceneHoverLeave;
RTerminateEvent.GraphicsSceneHelp = RTerminateEvent_Wrapper.GraphicsSceneHelp;
RTerminateEvent.GraphicsSceneDragEnter = RTerminateEvent_Wrapper.GraphicsSceneDragEnter;
RTerminateEvent.GraphicsSceneDragMove = RTerminateEvent_Wrapper.GraphicsSceneDragMove;
RTerminateEvent.GraphicsSceneDragLeave = RTerminateEvent_Wrapper.GraphicsSceneDragLeave;
RTerminateEvent.GraphicsSceneDrop = RTerminateEvent_Wrapper.GraphicsSceneDrop;
RTerminateEvent.GraphicsSceneWheel = RTerminateEvent_Wrapper.GraphicsSceneWheel;
RTerminateEvent.GraphicsSceneLeave = RTerminateEvent_Wrapper.GraphicsSceneLeave;
RTerminateEvent.KeyboardLayoutChange = RTerminateEvent_Wrapper.KeyboardLayoutChange;
RTerminateEvent.DynamicPropertyChange = RTerminateEvent_Wrapper.DynamicPropertyChange;
RTerminateEvent.TabletEnterProximity = RTerminateEvent_Wrapper.TabletEnterProximity;
RTerminateEvent.TabletLeaveProximity = RTerminateEvent_Wrapper.TabletLeaveProximity;
RTerminateEvent.NonClientAreaMouseMove = RTerminateEvent_Wrapper.NonClientAreaMouseMove;
RTerminateEvent.NonClientAreaMouseButtonPress = RTerminateEvent_Wrapper.NonClientAreaMouseButtonPress;
RTerminateEvent.NonClientAreaMouseButtonRelease = RTerminateEvent_Wrapper.NonClientAreaMouseButtonRelease;
RTerminateEvent.NonClientAreaMouseButtonDblClick = RTerminateEvent_Wrapper.NonClientAreaMouseButtonDblClick;
RTerminateEvent.MacSizeChange = RTerminateEvent_Wrapper.MacSizeChange;
RTerminateEvent.ContentsRectChange = RTerminateEvent_Wrapper.ContentsRectChange;
RTerminateEvent.MacGLWindowChange = RTerminateEvent_Wrapper.MacGLWindowChange;
RTerminateEvent.FutureCallOut = RTerminateEvent_Wrapper.FutureCallOut;
RTerminateEvent.GraphicsSceneResize = RTerminateEvent_Wrapper.GraphicsSceneResize;
RTerminateEvent.GraphicsSceneMove = RTerminateEvent_Wrapper.GraphicsSceneMove;
RTerminateEvent.CursorChange = RTerminateEvent_Wrapper.CursorChange;
RTerminateEvent.ToolTipChange = RTerminateEvent_Wrapper.ToolTipChange;
RTerminateEvent.NetworkReplyUpdated = RTerminateEvent_Wrapper.NetworkReplyUpdated;
RTerminateEvent.GrabMouse = RTerminateEvent_Wrapper.GrabMouse;
RTerminateEvent.UngrabMouse = RTerminateEvent_Wrapper.UngrabMouse;
RTerminateEvent.GrabKeyboard = RTerminateEvent_Wrapper.GrabKeyboard;
RTerminateEvent.UngrabKeyboard = RTerminateEvent_Wrapper.UngrabKeyboard;
RTerminateEvent.StateMachineSignal = RTerminateEvent_Wrapper.StateMachineSignal;
RTerminateEvent.StateMachineWrapped = RTerminateEvent_Wrapper.StateMachineWrapped;
RTerminateEvent.TouchBegin = RTerminateEvent_Wrapper.TouchBegin;
RTerminateEvent.TouchUpdate = RTerminateEvent_Wrapper.TouchUpdate;
RTerminateEvent.TouchEnd = RTerminateEvent_Wrapper.TouchEnd;
RTerminateEvent.NativeGesture = RTerminateEvent_Wrapper.NativeGesture;
RTerminateEvent.RequestSoftwareInputPanel = RTerminateEvent_Wrapper.RequestSoftwareInputPanel;
RTerminateEvent.CloseSoftwareInputPanel = RTerminateEvent_Wrapper.CloseSoftwareInputPanel;
RTerminateEvent.WinIdChange = RTerminateEvent_Wrapper.WinIdChange;
RTerminateEvent.Gesture = RTerminateEvent_Wrapper.Gesture;
RTerminateEvent.GestureOverride = RTerminateEvent_Wrapper.GestureOverride;
RTerminateEvent.ScrollPrepare = RTerminateEvent_Wrapper.ScrollPrepare;
RTerminateEvent.Scroll = RTerminateEvent_Wrapper.Scroll;
RTerminateEvent.Expose = RTerminateEvent_Wrapper.Expose;
RTerminateEvent.InputMethodQuery = RTerminateEvent_Wrapper.InputMethodQuery;
RTerminateEvent.OrientationChange = RTerminateEvent_Wrapper.OrientationChange;
RTerminateEvent.TouchCancel = RTerminateEvent_Wrapper.TouchCancel;
RTerminateEvent.ThemeChange = RTerminateEvent_Wrapper.ThemeChange;
RTerminateEvent.SockClose = RTerminateEvent_Wrapper.SockClose;
RTerminateEvent.PlatformPanel = RTerminateEvent_Wrapper.PlatformPanel;
RTerminateEvent.StyleAnimationUpdate = RTerminateEvent_Wrapper.StyleAnimationUpdate;
RTerminateEvent.ApplicationStateChange = RTerminateEvent_Wrapper.ApplicationStateChange;
RTerminateEvent.WindowChangeInternal = RTerminateEvent_Wrapper.WindowChangeInternal;
RTerminateEvent.ScreenChangeInternal = RTerminateEvent_Wrapper.ScreenChangeInternal;
RTerminateEvent.PlatformSurface = RTerminateEvent_Wrapper.PlatformSurface;
RTerminateEvent.Pointer = RTerminateEvent_Wrapper.Pointer;
RTerminateEvent.TabletTrackingChange = RTerminateEvent_Wrapper.TabletTrackingChange;
RTerminateEvent.User = RTerminateEvent_Wrapper.User;
RTerminateEvent.MaxUser = RTerminateEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

        // static function 
        RTerminateEvent.registerEventType = function() 
          
        {
          //print("JS: RTerminateEvent.registerEventType");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RTerminateEvent_WrapperSingletonInstance.registerEventType(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTerminateEvent);
  }

  
  else {
    
        print("RTerminateEvent.registerEventType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTerminateEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTerminateEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    