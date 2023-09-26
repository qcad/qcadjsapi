
      // auto generated
      //var self;

      // class constructor:
      function RPropertyEvent() {
        

        // should be RPropertyEvent_BaseJs.call(this, engine):
        //RPropertyEvent.prototype = new RPropertyEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPropertyEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPropertyEvent);
            //}
          }
          else {
            qWarning("RPropertyEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RPropertyEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPropertyEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPropertyEvent);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPropertyEvent_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPropertyEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPropertyEvent);
  }

  
  else {
    
        print("RPropertyEvent(): wrong number / type of arguments");
      
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

      //RPropertyEvent.prototype = new RPropertyEvent_BaseJs(engine);
      //RPropertyEvent.prototype = new RPropertyEvent_Wrapper(engine);
      RPropertyEvent.prototype = new Object();

      RPropertyEvent.prototype.toString = function() {
          //return "RPropertyEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPropertyEvent [JS]";
        };
      RPropertyEvent.getObjectType = function() {
        return RJSType_RPropertyEvent.getIdStatic();
      };

      RPropertyEvent.prototype.getObjectType = function() {
        return RJSType_RPropertyEvent.getIdStatic();
      };

      RPropertyEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPropertyEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RPropertyEvent.None = RPropertyEvent_Wrapper.None;
RPropertyEvent.Timer = RPropertyEvent_Wrapper.Timer;
RPropertyEvent.MouseButtonPress = RPropertyEvent_Wrapper.MouseButtonPress;
RPropertyEvent.MouseButtonRelease = RPropertyEvent_Wrapper.MouseButtonRelease;
RPropertyEvent.MouseButtonDblClick = RPropertyEvent_Wrapper.MouseButtonDblClick;
RPropertyEvent.MouseMove = RPropertyEvent_Wrapper.MouseMove;
RPropertyEvent.KeyPress = RPropertyEvent_Wrapper.KeyPress;
RPropertyEvent.KeyRelease = RPropertyEvent_Wrapper.KeyRelease;
RPropertyEvent.FocusIn = RPropertyEvent_Wrapper.FocusIn;
RPropertyEvent.FocusOut = RPropertyEvent_Wrapper.FocusOut;
RPropertyEvent.FocusAboutToChange = RPropertyEvent_Wrapper.FocusAboutToChange;
RPropertyEvent.Enter = RPropertyEvent_Wrapper.Enter;
RPropertyEvent.Leave = RPropertyEvent_Wrapper.Leave;
RPropertyEvent.Paint = RPropertyEvent_Wrapper.Paint;
RPropertyEvent.Move = RPropertyEvent_Wrapper.Move;
RPropertyEvent.Resize = RPropertyEvent_Wrapper.Resize;
RPropertyEvent.Create = RPropertyEvent_Wrapper.Create;
RPropertyEvent.Destroy = RPropertyEvent_Wrapper.Destroy;
RPropertyEvent.Show = RPropertyEvent_Wrapper.Show;
RPropertyEvent.Hide = RPropertyEvent_Wrapper.Hide;
RPropertyEvent.Close = RPropertyEvent_Wrapper.Close;
RPropertyEvent.Quit = RPropertyEvent_Wrapper.Quit;
RPropertyEvent.ParentChange = RPropertyEvent_Wrapper.ParentChange;
RPropertyEvent.ParentAboutToChange = RPropertyEvent_Wrapper.ParentAboutToChange;
RPropertyEvent.ThreadChange = RPropertyEvent_Wrapper.ThreadChange;
RPropertyEvent.WindowActivate = RPropertyEvent_Wrapper.WindowActivate;
RPropertyEvent.WindowDeactivate = RPropertyEvent_Wrapper.WindowDeactivate;
RPropertyEvent.ShowToParent = RPropertyEvent_Wrapper.ShowToParent;
RPropertyEvent.HideToParent = RPropertyEvent_Wrapper.HideToParent;
RPropertyEvent.Wheel = RPropertyEvent_Wrapper.Wheel;
RPropertyEvent.WindowTitleChange = RPropertyEvent_Wrapper.WindowTitleChange;
RPropertyEvent.WindowIconChange = RPropertyEvent_Wrapper.WindowIconChange;
RPropertyEvent.ApplicationWindowIconChange = RPropertyEvent_Wrapper.ApplicationWindowIconChange;
RPropertyEvent.ApplicationFontChange = RPropertyEvent_Wrapper.ApplicationFontChange;
RPropertyEvent.ApplicationLayoutDirectionChange = RPropertyEvent_Wrapper.ApplicationLayoutDirectionChange;
RPropertyEvent.ApplicationPaletteChange = RPropertyEvent_Wrapper.ApplicationPaletteChange;
RPropertyEvent.PaletteChange = RPropertyEvent_Wrapper.PaletteChange;
RPropertyEvent.Clipboard = RPropertyEvent_Wrapper.Clipboard;
RPropertyEvent.Speech = RPropertyEvent_Wrapper.Speech;
RPropertyEvent.MetaCall = RPropertyEvent_Wrapper.MetaCall;
RPropertyEvent.SockAct = RPropertyEvent_Wrapper.SockAct;
RPropertyEvent.WinEventAct = RPropertyEvent_Wrapper.WinEventAct;
RPropertyEvent.DeferredDelete = RPropertyEvent_Wrapper.DeferredDelete;
RPropertyEvent.DragEnter = RPropertyEvent_Wrapper.DragEnter;
RPropertyEvent.DragMove = RPropertyEvent_Wrapper.DragMove;
RPropertyEvent.DragLeave = RPropertyEvent_Wrapper.DragLeave;
RPropertyEvent.Drop = RPropertyEvent_Wrapper.Drop;
RPropertyEvent.DragResponse = RPropertyEvent_Wrapper.DragResponse;
RPropertyEvent.ChildAdded = RPropertyEvent_Wrapper.ChildAdded;
RPropertyEvent.ChildPolished = RPropertyEvent_Wrapper.ChildPolished;
RPropertyEvent.ChildRemoved = RPropertyEvent_Wrapper.ChildRemoved;
RPropertyEvent.ShowWindowRequest = RPropertyEvent_Wrapper.ShowWindowRequest;
RPropertyEvent.PolishRequest = RPropertyEvent_Wrapper.PolishRequest;
RPropertyEvent.Polish = RPropertyEvent_Wrapper.Polish;
RPropertyEvent.LayoutRequest = RPropertyEvent_Wrapper.LayoutRequest;
RPropertyEvent.UpdateRequest = RPropertyEvent_Wrapper.UpdateRequest;
RPropertyEvent.UpdateLater = RPropertyEvent_Wrapper.UpdateLater;
RPropertyEvent.EmbeddingControl = RPropertyEvent_Wrapper.EmbeddingControl;
RPropertyEvent.ActivateControl = RPropertyEvent_Wrapper.ActivateControl;
RPropertyEvent.DeactivateControl = RPropertyEvent_Wrapper.DeactivateControl;
RPropertyEvent.ContextMenu = RPropertyEvent_Wrapper.ContextMenu;
RPropertyEvent.InputMethod = RPropertyEvent_Wrapper.InputMethod;
RPropertyEvent.TabletMove = RPropertyEvent_Wrapper.TabletMove;
RPropertyEvent.LocaleChange = RPropertyEvent_Wrapper.LocaleChange;
RPropertyEvent.LanguageChange = RPropertyEvent_Wrapper.LanguageChange;
RPropertyEvent.LayoutDirectionChange = RPropertyEvent_Wrapper.LayoutDirectionChange;
RPropertyEvent.Style = RPropertyEvent_Wrapper.Style;
RPropertyEvent.TabletPress = RPropertyEvent_Wrapper.TabletPress;
RPropertyEvent.TabletRelease = RPropertyEvent_Wrapper.TabletRelease;
RPropertyEvent.OkRequest = RPropertyEvent_Wrapper.OkRequest;
RPropertyEvent.HelpRequest = RPropertyEvent_Wrapper.HelpRequest;
RPropertyEvent.IconDrag = RPropertyEvent_Wrapper.IconDrag;
RPropertyEvent.FontChange = RPropertyEvent_Wrapper.FontChange;
RPropertyEvent.EnabledChange = RPropertyEvent_Wrapper.EnabledChange;
RPropertyEvent.ActivationChange = RPropertyEvent_Wrapper.ActivationChange;
RPropertyEvent.StyleChange = RPropertyEvent_Wrapper.StyleChange;
RPropertyEvent.IconTextChange = RPropertyEvent_Wrapper.IconTextChange;
RPropertyEvent.ModifiedChange = RPropertyEvent_Wrapper.ModifiedChange;
RPropertyEvent.MouseTrackingChange = RPropertyEvent_Wrapper.MouseTrackingChange;
RPropertyEvent.WindowBlocked = RPropertyEvent_Wrapper.WindowBlocked;
RPropertyEvent.WindowUnblocked = RPropertyEvent_Wrapper.WindowUnblocked;
RPropertyEvent.WindowStateChange = RPropertyEvent_Wrapper.WindowStateChange;
RPropertyEvent.ReadOnlyChange = RPropertyEvent_Wrapper.ReadOnlyChange;
RPropertyEvent.ToolTip = RPropertyEvent_Wrapper.ToolTip;
RPropertyEvent.WhatsThis = RPropertyEvent_Wrapper.WhatsThis;
RPropertyEvent.StatusTip = RPropertyEvent_Wrapper.StatusTip;
RPropertyEvent.ActionChanged = RPropertyEvent_Wrapper.ActionChanged;
RPropertyEvent.ActionAdded = RPropertyEvent_Wrapper.ActionAdded;
RPropertyEvent.ActionRemoved = RPropertyEvent_Wrapper.ActionRemoved;
RPropertyEvent.FileOpen = RPropertyEvent_Wrapper.FileOpen;
RPropertyEvent.Shortcut = RPropertyEvent_Wrapper.Shortcut;
RPropertyEvent.ShortcutOverride = RPropertyEvent_Wrapper.ShortcutOverride;
RPropertyEvent.WhatsThisClicked = RPropertyEvent_Wrapper.WhatsThisClicked;
RPropertyEvent.ToolBarChange = RPropertyEvent_Wrapper.ToolBarChange;
RPropertyEvent.ApplicationActivate = RPropertyEvent_Wrapper.ApplicationActivate;
RPropertyEvent.ApplicationActivated = RPropertyEvent_Wrapper.ApplicationActivated;
RPropertyEvent.ApplicationDeactivate = RPropertyEvent_Wrapper.ApplicationDeactivate;
RPropertyEvent.ApplicationDeactivated = RPropertyEvent_Wrapper.ApplicationDeactivated;
RPropertyEvent.QueryWhatsThis = RPropertyEvent_Wrapper.QueryWhatsThis;
RPropertyEvent.EnterWhatsThisMode = RPropertyEvent_Wrapper.EnterWhatsThisMode;
RPropertyEvent.LeaveWhatsThisMode = RPropertyEvent_Wrapper.LeaveWhatsThisMode;
RPropertyEvent.ZOrderChange = RPropertyEvent_Wrapper.ZOrderChange;
RPropertyEvent.HoverEnter = RPropertyEvent_Wrapper.HoverEnter;
RPropertyEvent.HoverLeave = RPropertyEvent_Wrapper.HoverLeave;
RPropertyEvent.HoverMove = RPropertyEvent_Wrapper.HoverMove;
RPropertyEvent.AcceptDropsChange = RPropertyEvent_Wrapper.AcceptDropsChange;
RPropertyEvent.ZeroTimerEvent = RPropertyEvent_Wrapper.ZeroTimerEvent;
RPropertyEvent.GraphicsSceneMouseMove = RPropertyEvent_Wrapper.GraphicsSceneMouseMove;
RPropertyEvent.GraphicsSceneMousePress = RPropertyEvent_Wrapper.GraphicsSceneMousePress;
RPropertyEvent.GraphicsSceneMouseRelease = RPropertyEvent_Wrapper.GraphicsSceneMouseRelease;
RPropertyEvent.GraphicsSceneMouseDoubleClick = RPropertyEvent_Wrapper.GraphicsSceneMouseDoubleClick;
RPropertyEvent.GraphicsSceneContextMenu = RPropertyEvent_Wrapper.GraphicsSceneContextMenu;
RPropertyEvent.GraphicsSceneHoverEnter = RPropertyEvent_Wrapper.GraphicsSceneHoverEnter;
RPropertyEvent.GraphicsSceneHoverMove = RPropertyEvent_Wrapper.GraphicsSceneHoverMove;
RPropertyEvent.GraphicsSceneHoverLeave = RPropertyEvent_Wrapper.GraphicsSceneHoverLeave;
RPropertyEvent.GraphicsSceneHelp = RPropertyEvent_Wrapper.GraphicsSceneHelp;
RPropertyEvent.GraphicsSceneDragEnter = RPropertyEvent_Wrapper.GraphicsSceneDragEnter;
RPropertyEvent.GraphicsSceneDragMove = RPropertyEvent_Wrapper.GraphicsSceneDragMove;
RPropertyEvent.GraphicsSceneDragLeave = RPropertyEvent_Wrapper.GraphicsSceneDragLeave;
RPropertyEvent.GraphicsSceneDrop = RPropertyEvent_Wrapper.GraphicsSceneDrop;
RPropertyEvent.GraphicsSceneWheel = RPropertyEvent_Wrapper.GraphicsSceneWheel;
RPropertyEvent.GraphicsSceneLeave = RPropertyEvent_Wrapper.GraphicsSceneLeave;
RPropertyEvent.KeyboardLayoutChange = RPropertyEvent_Wrapper.KeyboardLayoutChange;
RPropertyEvent.DynamicPropertyChange = RPropertyEvent_Wrapper.DynamicPropertyChange;
RPropertyEvent.TabletEnterProximity = RPropertyEvent_Wrapper.TabletEnterProximity;
RPropertyEvent.TabletLeaveProximity = RPropertyEvent_Wrapper.TabletLeaveProximity;
RPropertyEvent.NonClientAreaMouseMove = RPropertyEvent_Wrapper.NonClientAreaMouseMove;
RPropertyEvent.NonClientAreaMouseButtonPress = RPropertyEvent_Wrapper.NonClientAreaMouseButtonPress;
RPropertyEvent.NonClientAreaMouseButtonRelease = RPropertyEvent_Wrapper.NonClientAreaMouseButtonRelease;
RPropertyEvent.NonClientAreaMouseButtonDblClick = RPropertyEvent_Wrapper.NonClientAreaMouseButtonDblClick;
RPropertyEvent.MacSizeChange = RPropertyEvent_Wrapper.MacSizeChange;
RPropertyEvent.ContentsRectChange = RPropertyEvent_Wrapper.ContentsRectChange;
RPropertyEvent.MacGLWindowChange = RPropertyEvent_Wrapper.MacGLWindowChange;
RPropertyEvent.FutureCallOut = RPropertyEvent_Wrapper.FutureCallOut;
RPropertyEvent.GraphicsSceneResize = RPropertyEvent_Wrapper.GraphicsSceneResize;
RPropertyEvent.GraphicsSceneMove = RPropertyEvent_Wrapper.GraphicsSceneMove;
RPropertyEvent.CursorChange = RPropertyEvent_Wrapper.CursorChange;
RPropertyEvent.ToolTipChange = RPropertyEvent_Wrapper.ToolTipChange;
RPropertyEvent.NetworkReplyUpdated = RPropertyEvent_Wrapper.NetworkReplyUpdated;
RPropertyEvent.GrabMouse = RPropertyEvent_Wrapper.GrabMouse;
RPropertyEvent.UngrabMouse = RPropertyEvent_Wrapper.UngrabMouse;
RPropertyEvent.GrabKeyboard = RPropertyEvent_Wrapper.GrabKeyboard;
RPropertyEvent.UngrabKeyboard = RPropertyEvent_Wrapper.UngrabKeyboard;
RPropertyEvent.StateMachineSignal = RPropertyEvent_Wrapper.StateMachineSignal;
RPropertyEvent.StateMachineWrapped = RPropertyEvent_Wrapper.StateMachineWrapped;
RPropertyEvent.TouchBegin = RPropertyEvent_Wrapper.TouchBegin;
RPropertyEvent.TouchUpdate = RPropertyEvent_Wrapper.TouchUpdate;
RPropertyEvent.TouchEnd = RPropertyEvent_Wrapper.TouchEnd;
RPropertyEvent.NativeGesture = RPropertyEvent_Wrapper.NativeGesture;
RPropertyEvent.RequestSoftwareInputPanel = RPropertyEvent_Wrapper.RequestSoftwareInputPanel;
RPropertyEvent.CloseSoftwareInputPanel = RPropertyEvent_Wrapper.CloseSoftwareInputPanel;
RPropertyEvent.WinIdChange = RPropertyEvent_Wrapper.WinIdChange;
RPropertyEvent.Gesture = RPropertyEvent_Wrapper.Gesture;
RPropertyEvent.GestureOverride = RPropertyEvent_Wrapper.GestureOverride;
RPropertyEvent.ScrollPrepare = RPropertyEvent_Wrapper.ScrollPrepare;
RPropertyEvent.Scroll = RPropertyEvent_Wrapper.Scroll;
RPropertyEvent.Expose = RPropertyEvent_Wrapper.Expose;
RPropertyEvent.InputMethodQuery = RPropertyEvent_Wrapper.InputMethodQuery;
RPropertyEvent.OrientationChange = RPropertyEvent_Wrapper.OrientationChange;
RPropertyEvent.TouchCancel = RPropertyEvent_Wrapper.TouchCancel;
RPropertyEvent.ThemeChange = RPropertyEvent_Wrapper.ThemeChange;
RPropertyEvent.SockClose = RPropertyEvent_Wrapper.SockClose;
RPropertyEvent.PlatformPanel = RPropertyEvent_Wrapper.PlatformPanel;
RPropertyEvent.StyleAnimationUpdate = RPropertyEvent_Wrapper.StyleAnimationUpdate;
RPropertyEvent.ApplicationStateChange = RPropertyEvent_Wrapper.ApplicationStateChange;
RPropertyEvent.WindowChangeInternal = RPropertyEvent_Wrapper.WindowChangeInternal;
RPropertyEvent.ScreenChangeInternal = RPropertyEvent_Wrapper.ScreenChangeInternal;
RPropertyEvent.PlatformSurface = RPropertyEvent_Wrapper.PlatformSurface;
RPropertyEvent.Pointer = RPropertyEvent_Wrapper.Pointer;
RPropertyEvent.TabletTrackingChange = RPropertyEvent_Wrapper.TabletTrackingChange;
RPropertyEvent.User = RPropertyEvent_Wrapper.User;
RPropertyEvent.MaxUser = RPropertyEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

        // static function 
        RPropertyEvent.registerEventType = function() 
          
        {
          //print("JS: RPropertyEvent.registerEventType");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RPropertyEvent_WrapperSingletonInstance.registerEventType(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPropertyEvent);
  }

  
  else {
    
        print("RPropertyEvent.registerEventType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPropertyEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPropertyEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    