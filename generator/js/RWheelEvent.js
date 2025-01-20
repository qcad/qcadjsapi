
      // auto generated
      //var self;

      // class constructor:
      function RWheelEvent() {
        

        // should be RWheelEvent_BaseJs.call(this, engine):
        //RWheelEvent.prototype = new RWheelEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RWheelEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RWheelEvent);
                
            //}
          }
          else {
            qWarning("RWheelEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 7) {
    
            self = this;
            wrapper = new RWheelEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RWheelEvent);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RWheelEvent);
  }

  
  else {
    
        print("RWheelEvent(): wrong number / type of arguments");
      
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
          
        }

        

      }

      //RWheelEvent.prototype = new RWheelEvent_BaseJs(engine);
      //RWheelEvent.prototype = new RWheelEvent_Wrapper(engine);
      RWheelEvent.prototype = new Object();

      RWheelEvent.prototype.toString = function() {
          //return "RWheelEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RWheelEvent [JS]";
        };
      RWheelEvent.getObjectType = function() {
        return RJSType_RWheelEvent.getIdStatic();
      };

      RWheelEvent.prototype.getObjectType = function() {
        return RJSType_RWheelEvent.getIdStatic();
      };

      RWheelEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RWheelEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QInputEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QPointerEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QSinglePointEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWheelEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RInputEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RWheelEvent.None = RWheelEvent_Wrapper.None;
RWheelEvent.Timer = RWheelEvent_Wrapper.Timer;
RWheelEvent.MouseButtonPress = RWheelEvent_Wrapper.MouseButtonPress;
RWheelEvent.MouseButtonRelease = RWheelEvent_Wrapper.MouseButtonRelease;
RWheelEvent.MouseButtonDblClick = RWheelEvent_Wrapper.MouseButtonDblClick;
RWheelEvent.MouseMove = RWheelEvent_Wrapper.MouseMove;
RWheelEvent.KeyPress = RWheelEvent_Wrapper.KeyPress;
RWheelEvent.KeyRelease = RWheelEvent_Wrapper.KeyRelease;
RWheelEvent.FocusIn = RWheelEvent_Wrapper.FocusIn;
RWheelEvent.FocusOut = RWheelEvent_Wrapper.FocusOut;
RWheelEvent.FocusAboutToChange = RWheelEvent_Wrapper.FocusAboutToChange;
RWheelEvent.Enter = RWheelEvent_Wrapper.Enter;
RWheelEvent.Leave = RWheelEvent_Wrapper.Leave;
RWheelEvent.Paint = RWheelEvent_Wrapper.Paint;
RWheelEvent.Move = RWheelEvent_Wrapper.Move;
RWheelEvent.Resize = RWheelEvent_Wrapper.Resize;
RWheelEvent.Create = RWheelEvent_Wrapper.Create;
RWheelEvent.Destroy = RWheelEvent_Wrapper.Destroy;
RWheelEvent.Show = RWheelEvent_Wrapper.Show;
RWheelEvent.Hide = RWheelEvent_Wrapper.Hide;
RWheelEvent.Close = RWheelEvent_Wrapper.Close;
RWheelEvent.Quit = RWheelEvent_Wrapper.Quit;
RWheelEvent.ParentChange = RWheelEvent_Wrapper.ParentChange;
RWheelEvent.ParentAboutToChange = RWheelEvent_Wrapper.ParentAboutToChange;
RWheelEvent.ThreadChange = RWheelEvent_Wrapper.ThreadChange;
RWheelEvent.WindowActivate = RWheelEvent_Wrapper.WindowActivate;
RWheelEvent.WindowDeactivate = RWheelEvent_Wrapper.WindowDeactivate;
RWheelEvent.ShowToParent = RWheelEvent_Wrapper.ShowToParent;
RWheelEvent.HideToParent = RWheelEvent_Wrapper.HideToParent;
RWheelEvent.Wheel = RWheelEvent_Wrapper.Wheel;
RWheelEvent.WindowTitleChange = RWheelEvent_Wrapper.WindowTitleChange;
RWheelEvent.WindowIconChange = RWheelEvent_Wrapper.WindowIconChange;
RWheelEvent.ApplicationWindowIconChange = RWheelEvent_Wrapper.ApplicationWindowIconChange;
RWheelEvent.ApplicationFontChange = RWheelEvent_Wrapper.ApplicationFontChange;
RWheelEvent.ApplicationLayoutDirectionChange = RWheelEvent_Wrapper.ApplicationLayoutDirectionChange;
RWheelEvent.ApplicationPaletteChange = RWheelEvent_Wrapper.ApplicationPaletteChange;
RWheelEvent.PaletteChange = RWheelEvent_Wrapper.PaletteChange;
RWheelEvent.Clipboard = RWheelEvent_Wrapper.Clipboard;
RWheelEvent.Speech = RWheelEvent_Wrapper.Speech;
RWheelEvent.MetaCall = RWheelEvent_Wrapper.MetaCall;
RWheelEvent.SockAct = RWheelEvent_Wrapper.SockAct;
RWheelEvent.WinEventAct = RWheelEvent_Wrapper.WinEventAct;
RWheelEvent.DeferredDelete = RWheelEvent_Wrapper.DeferredDelete;
RWheelEvent.DragEnter = RWheelEvent_Wrapper.DragEnter;
RWheelEvent.DragMove = RWheelEvent_Wrapper.DragMove;
RWheelEvent.DragLeave = RWheelEvent_Wrapper.DragLeave;
RWheelEvent.Drop = RWheelEvent_Wrapper.Drop;
RWheelEvent.DragResponse = RWheelEvent_Wrapper.DragResponse;
RWheelEvent.ChildAdded = RWheelEvent_Wrapper.ChildAdded;
RWheelEvent.ChildPolished = RWheelEvent_Wrapper.ChildPolished;
RWheelEvent.ChildRemoved = RWheelEvent_Wrapper.ChildRemoved;
RWheelEvent.ShowWindowRequest = RWheelEvent_Wrapper.ShowWindowRequest;
RWheelEvent.PolishRequest = RWheelEvent_Wrapper.PolishRequest;
RWheelEvent.Polish = RWheelEvent_Wrapper.Polish;
RWheelEvent.LayoutRequest = RWheelEvent_Wrapper.LayoutRequest;
RWheelEvent.UpdateRequest = RWheelEvent_Wrapper.UpdateRequest;
RWheelEvent.UpdateLater = RWheelEvent_Wrapper.UpdateLater;
RWheelEvent.EmbeddingControl = RWheelEvent_Wrapper.EmbeddingControl;
RWheelEvent.ActivateControl = RWheelEvent_Wrapper.ActivateControl;
RWheelEvent.DeactivateControl = RWheelEvent_Wrapper.DeactivateControl;
RWheelEvent.ContextMenu = RWheelEvent_Wrapper.ContextMenu;
RWheelEvent.InputMethod = RWheelEvent_Wrapper.InputMethod;
RWheelEvent.TabletMove = RWheelEvent_Wrapper.TabletMove;
RWheelEvent.LocaleChange = RWheelEvent_Wrapper.LocaleChange;
RWheelEvent.LanguageChange = RWheelEvent_Wrapper.LanguageChange;
RWheelEvent.LayoutDirectionChange = RWheelEvent_Wrapper.LayoutDirectionChange;
RWheelEvent.Style = RWheelEvent_Wrapper.Style;
RWheelEvent.TabletPress = RWheelEvent_Wrapper.TabletPress;
RWheelEvent.TabletRelease = RWheelEvent_Wrapper.TabletRelease;
RWheelEvent.OkRequest = RWheelEvent_Wrapper.OkRequest;
RWheelEvent.HelpRequest = RWheelEvent_Wrapper.HelpRequest;
RWheelEvent.IconDrag = RWheelEvent_Wrapper.IconDrag;
RWheelEvent.FontChange = RWheelEvent_Wrapper.FontChange;
RWheelEvent.EnabledChange = RWheelEvent_Wrapper.EnabledChange;
RWheelEvent.ActivationChange = RWheelEvent_Wrapper.ActivationChange;
RWheelEvent.StyleChange = RWheelEvent_Wrapper.StyleChange;
RWheelEvent.IconTextChange = RWheelEvent_Wrapper.IconTextChange;
RWheelEvent.ModifiedChange = RWheelEvent_Wrapper.ModifiedChange;
RWheelEvent.MouseTrackingChange = RWheelEvent_Wrapper.MouseTrackingChange;
RWheelEvent.WindowBlocked = RWheelEvent_Wrapper.WindowBlocked;
RWheelEvent.WindowUnblocked = RWheelEvent_Wrapper.WindowUnblocked;
RWheelEvent.WindowStateChange = RWheelEvent_Wrapper.WindowStateChange;
RWheelEvent.ReadOnlyChange = RWheelEvent_Wrapper.ReadOnlyChange;
RWheelEvent.ToolTip = RWheelEvent_Wrapper.ToolTip;
RWheelEvent.WhatsThis = RWheelEvent_Wrapper.WhatsThis;
RWheelEvent.StatusTip = RWheelEvent_Wrapper.StatusTip;
RWheelEvent.ActionChanged = RWheelEvent_Wrapper.ActionChanged;
RWheelEvent.ActionAdded = RWheelEvent_Wrapper.ActionAdded;
RWheelEvent.ActionRemoved = RWheelEvent_Wrapper.ActionRemoved;
RWheelEvent.FileOpen = RWheelEvent_Wrapper.FileOpen;
RWheelEvent.Shortcut = RWheelEvent_Wrapper.Shortcut;
RWheelEvent.ShortcutOverride = RWheelEvent_Wrapper.ShortcutOverride;
RWheelEvent.WhatsThisClicked = RWheelEvent_Wrapper.WhatsThisClicked;
RWheelEvent.ToolBarChange = RWheelEvent_Wrapper.ToolBarChange;
RWheelEvent.ApplicationActivate = RWheelEvent_Wrapper.ApplicationActivate;
RWheelEvent.ApplicationActivated = RWheelEvent_Wrapper.ApplicationActivated;
RWheelEvent.ApplicationDeactivate = RWheelEvent_Wrapper.ApplicationDeactivate;
RWheelEvent.ApplicationDeactivated = RWheelEvent_Wrapper.ApplicationDeactivated;
RWheelEvent.QueryWhatsThis = RWheelEvent_Wrapper.QueryWhatsThis;
RWheelEvent.EnterWhatsThisMode = RWheelEvent_Wrapper.EnterWhatsThisMode;
RWheelEvent.LeaveWhatsThisMode = RWheelEvent_Wrapper.LeaveWhatsThisMode;
RWheelEvent.ZOrderChange = RWheelEvent_Wrapper.ZOrderChange;
RWheelEvent.HoverEnter = RWheelEvent_Wrapper.HoverEnter;
RWheelEvent.HoverLeave = RWheelEvent_Wrapper.HoverLeave;
RWheelEvent.HoverMove = RWheelEvent_Wrapper.HoverMove;
RWheelEvent.AcceptDropsChange = RWheelEvent_Wrapper.AcceptDropsChange;
RWheelEvent.ZeroTimerEvent = RWheelEvent_Wrapper.ZeroTimerEvent;
RWheelEvent.GraphicsSceneMouseMove = RWheelEvent_Wrapper.GraphicsSceneMouseMove;
RWheelEvent.GraphicsSceneMousePress = RWheelEvent_Wrapper.GraphicsSceneMousePress;
RWheelEvent.GraphicsSceneMouseRelease = RWheelEvent_Wrapper.GraphicsSceneMouseRelease;
RWheelEvent.GraphicsSceneMouseDoubleClick = RWheelEvent_Wrapper.GraphicsSceneMouseDoubleClick;
RWheelEvent.GraphicsSceneContextMenu = RWheelEvent_Wrapper.GraphicsSceneContextMenu;
RWheelEvent.GraphicsSceneHoverEnter = RWheelEvent_Wrapper.GraphicsSceneHoverEnter;
RWheelEvent.GraphicsSceneHoverMove = RWheelEvent_Wrapper.GraphicsSceneHoverMove;
RWheelEvent.GraphicsSceneHoverLeave = RWheelEvent_Wrapper.GraphicsSceneHoverLeave;
RWheelEvent.GraphicsSceneHelp = RWheelEvent_Wrapper.GraphicsSceneHelp;
RWheelEvent.GraphicsSceneDragEnter = RWheelEvent_Wrapper.GraphicsSceneDragEnter;
RWheelEvent.GraphicsSceneDragMove = RWheelEvent_Wrapper.GraphicsSceneDragMove;
RWheelEvent.GraphicsSceneDragLeave = RWheelEvent_Wrapper.GraphicsSceneDragLeave;
RWheelEvent.GraphicsSceneDrop = RWheelEvent_Wrapper.GraphicsSceneDrop;
RWheelEvent.GraphicsSceneWheel = RWheelEvent_Wrapper.GraphicsSceneWheel;
RWheelEvent.GraphicsSceneLeave = RWheelEvent_Wrapper.GraphicsSceneLeave;
RWheelEvent.KeyboardLayoutChange = RWheelEvent_Wrapper.KeyboardLayoutChange;
RWheelEvent.DynamicPropertyChange = RWheelEvent_Wrapper.DynamicPropertyChange;
RWheelEvent.TabletEnterProximity = RWheelEvent_Wrapper.TabletEnterProximity;
RWheelEvent.TabletLeaveProximity = RWheelEvent_Wrapper.TabletLeaveProximity;
RWheelEvent.NonClientAreaMouseMove = RWheelEvent_Wrapper.NonClientAreaMouseMove;
RWheelEvent.NonClientAreaMouseButtonPress = RWheelEvent_Wrapper.NonClientAreaMouseButtonPress;
RWheelEvent.NonClientAreaMouseButtonRelease = RWheelEvent_Wrapper.NonClientAreaMouseButtonRelease;
RWheelEvent.NonClientAreaMouseButtonDblClick = RWheelEvent_Wrapper.NonClientAreaMouseButtonDblClick;
RWheelEvent.MacSizeChange = RWheelEvent_Wrapper.MacSizeChange;
RWheelEvent.ContentsRectChange = RWheelEvent_Wrapper.ContentsRectChange;
RWheelEvent.MacGLWindowChange = RWheelEvent_Wrapper.MacGLWindowChange;
RWheelEvent.FutureCallOut = RWheelEvent_Wrapper.FutureCallOut;
RWheelEvent.GraphicsSceneResize = RWheelEvent_Wrapper.GraphicsSceneResize;
RWheelEvent.GraphicsSceneMove = RWheelEvent_Wrapper.GraphicsSceneMove;
RWheelEvent.CursorChange = RWheelEvent_Wrapper.CursorChange;
RWheelEvent.ToolTipChange = RWheelEvent_Wrapper.ToolTipChange;
RWheelEvent.NetworkReplyUpdated = RWheelEvent_Wrapper.NetworkReplyUpdated;
RWheelEvent.GrabMouse = RWheelEvent_Wrapper.GrabMouse;
RWheelEvent.UngrabMouse = RWheelEvent_Wrapper.UngrabMouse;
RWheelEvent.GrabKeyboard = RWheelEvent_Wrapper.GrabKeyboard;
RWheelEvent.UngrabKeyboard = RWheelEvent_Wrapper.UngrabKeyboard;
RWheelEvent.StateMachineSignal = RWheelEvent_Wrapper.StateMachineSignal;
RWheelEvent.StateMachineWrapped = RWheelEvent_Wrapper.StateMachineWrapped;
RWheelEvent.TouchBegin = RWheelEvent_Wrapper.TouchBegin;
RWheelEvent.TouchUpdate = RWheelEvent_Wrapper.TouchUpdate;
RWheelEvent.TouchEnd = RWheelEvent_Wrapper.TouchEnd;
RWheelEvent.NativeGesture = RWheelEvent_Wrapper.NativeGesture;
RWheelEvent.RequestSoftwareInputPanel = RWheelEvent_Wrapper.RequestSoftwareInputPanel;
RWheelEvent.CloseSoftwareInputPanel = RWheelEvent_Wrapper.CloseSoftwareInputPanel;
RWheelEvent.WinIdChange = RWheelEvent_Wrapper.WinIdChange;
RWheelEvent.Gesture = RWheelEvent_Wrapper.Gesture;
RWheelEvent.GestureOverride = RWheelEvent_Wrapper.GestureOverride;
RWheelEvent.ScrollPrepare = RWheelEvent_Wrapper.ScrollPrepare;
RWheelEvent.Scroll = RWheelEvent_Wrapper.Scroll;
RWheelEvent.Expose = RWheelEvent_Wrapper.Expose;
RWheelEvent.InputMethodQuery = RWheelEvent_Wrapper.InputMethodQuery;
RWheelEvent.OrientationChange = RWheelEvent_Wrapper.OrientationChange;
RWheelEvent.TouchCancel = RWheelEvent_Wrapper.TouchCancel;
RWheelEvent.ThemeChange = RWheelEvent_Wrapper.ThemeChange;
RWheelEvent.SockClose = RWheelEvent_Wrapper.SockClose;
RWheelEvent.PlatformPanel = RWheelEvent_Wrapper.PlatformPanel;
RWheelEvent.StyleAnimationUpdate = RWheelEvent_Wrapper.StyleAnimationUpdate;
RWheelEvent.ApplicationStateChange = RWheelEvent_Wrapper.ApplicationStateChange;
RWheelEvent.WindowChangeInternal = RWheelEvent_Wrapper.WindowChangeInternal;
RWheelEvent.ScreenChangeInternal = RWheelEvent_Wrapper.ScreenChangeInternal;
RWheelEvent.PlatformSurface = RWheelEvent_Wrapper.PlatformSurface;
RWheelEvent.Pointer = RWheelEvent_Wrapper.Pointer;
RWheelEvent.TabletTrackingChange = RWheelEvent_Wrapper.TabletTrackingChange;
RWheelEvent.User = RWheelEvent_Wrapper.User;
RWheelEvent.MaxUser = RWheelEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RWheelEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RWheelEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      