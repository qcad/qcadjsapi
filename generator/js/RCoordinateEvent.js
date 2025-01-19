
      // auto generated
      //var self;

      // class constructor:
      function RCoordinateEvent() {
        

        // should be RCoordinateEvent_BaseJs.call(this, engine):
        //RCoordinateEvent.prototype = new RCoordinateEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCoordinateEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RCoordinateEvent);
            //}
          }
          else {
            qWarning("RCoordinateEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RCoordinateEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCoordinateEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCoordinateEvent);
  }

  
  else {
    
        print("RCoordinateEvent(): wrong number / type of arguments");
      
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

      //RCoordinateEvent.prototype = new RCoordinateEvent_BaseJs(engine);
      //RCoordinateEvent.prototype = new RCoordinateEvent_Wrapper(engine);
      RCoordinateEvent.prototype = new Object();

      RCoordinateEvent.prototype.toString = function() {
          //return "RCoordinateEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCoordinateEvent [JS]";
        };
      RCoordinateEvent.getObjectType = function() {
        return RJSType_RCoordinateEvent.getIdStatic();
      };

      RCoordinateEvent.prototype.getObjectType = function() {
        return RJSType_RCoordinateEvent.getIdStatic();
      };

      RCoordinateEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCoordinateEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RInputEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RCoordinateEvent.None = RCoordinateEvent_Wrapper.None;
RCoordinateEvent.Timer = RCoordinateEvent_Wrapper.Timer;
RCoordinateEvent.MouseButtonPress = RCoordinateEvent_Wrapper.MouseButtonPress;
RCoordinateEvent.MouseButtonRelease = RCoordinateEvent_Wrapper.MouseButtonRelease;
RCoordinateEvent.MouseButtonDblClick = RCoordinateEvent_Wrapper.MouseButtonDblClick;
RCoordinateEvent.MouseMove = RCoordinateEvent_Wrapper.MouseMove;
RCoordinateEvent.KeyPress = RCoordinateEvent_Wrapper.KeyPress;
RCoordinateEvent.KeyRelease = RCoordinateEvent_Wrapper.KeyRelease;
RCoordinateEvent.FocusIn = RCoordinateEvent_Wrapper.FocusIn;
RCoordinateEvent.FocusOut = RCoordinateEvent_Wrapper.FocusOut;
RCoordinateEvent.FocusAboutToChange = RCoordinateEvent_Wrapper.FocusAboutToChange;
RCoordinateEvent.Enter = RCoordinateEvent_Wrapper.Enter;
RCoordinateEvent.Leave = RCoordinateEvent_Wrapper.Leave;
RCoordinateEvent.Paint = RCoordinateEvent_Wrapper.Paint;
RCoordinateEvent.Move = RCoordinateEvent_Wrapper.Move;
RCoordinateEvent.Resize = RCoordinateEvent_Wrapper.Resize;
RCoordinateEvent.Create = RCoordinateEvent_Wrapper.Create;
RCoordinateEvent.Destroy = RCoordinateEvent_Wrapper.Destroy;
RCoordinateEvent.Show = RCoordinateEvent_Wrapper.Show;
RCoordinateEvent.Hide = RCoordinateEvent_Wrapper.Hide;
RCoordinateEvent.Close = RCoordinateEvent_Wrapper.Close;
RCoordinateEvent.Quit = RCoordinateEvent_Wrapper.Quit;
RCoordinateEvent.ParentChange = RCoordinateEvent_Wrapper.ParentChange;
RCoordinateEvent.ParentAboutToChange = RCoordinateEvent_Wrapper.ParentAboutToChange;
RCoordinateEvent.ThreadChange = RCoordinateEvent_Wrapper.ThreadChange;
RCoordinateEvent.WindowActivate = RCoordinateEvent_Wrapper.WindowActivate;
RCoordinateEvent.WindowDeactivate = RCoordinateEvent_Wrapper.WindowDeactivate;
RCoordinateEvent.ShowToParent = RCoordinateEvent_Wrapper.ShowToParent;
RCoordinateEvent.HideToParent = RCoordinateEvent_Wrapper.HideToParent;
RCoordinateEvent.Wheel = RCoordinateEvent_Wrapper.Wheel;
RCoordinateEvent.WindowTitleChange = RCoordinateEvent_Wrapper.WindowTitleChange;
RCoordinateEvent.WindowIconChange = RCoordinateEvent_Wrapper.WindowIconChange;
RCoordinateEvent.ApplicationWindowIconChange = RCoordinateEvent_Wrapper.ApplicationWindowIconChange;
RCoordinateEvent.ApplicationFontChange = RCoordinateEvent_Wrapper.ApplicationFontChange;
RCoordinateEvent.ApplicationLayoutDirectionChange = RCoordinateEvent_Wrapper.ApplicationLayoutDirectionChange;
RCoordinateEvent.ApplicationPaletteChange = RCoordinateEvent_Wrapper.ApplicationPaletteChange;
RCoordinateEvent.PaletteChange = RCoordinateEvent_Wrapper.PaletteChange;
RCoordinateEvent.Clipboard = RCoordinateEvent_Wrapper.Clipboard;
RCoordinateEvent.Speech = RCoordinateEvent_Wrapper.Speech;
RCoordinateEvent.MetaCall = RCoordinateEvent_Wrapper.MetaCall;
RCoordinateEvent.SockAct = RCoordinateEvent_Wrapper.SockAct;
RCoordinateEvent.WinEventAct = RCoordinateEvent_Wrapper.WinEventAct;
RCoordinateEvent.DeferredDelete = RCoordinateEvent_Wrapper.DeferredDelete;
RCoordinateEvent.DragEnter = RCoordinateEvent_Wrapper.DragEnter;
RCoordinateEvent.DragMove = RCoordinateEvent_Wrapper.DragMove;
RCoordinateEvent.DragLeave = RCoordinateEvent_Wrapper.DragLeave;
RCoordinateEvent.Drop = RCoordinateEvent_Wrapper.Drop;
RCoordinateEvent.DragResponse = RCoordinateEvent_Wrapper.DragResponse;
RCoordinateEvent.ChildAdded = RCoordinateEvent_Wrapper.ChildAdded;
RCoordinateEvent.ChildPolished = RCoordinateEvent_Wrapper.ChildPolished;
RCoordinateEvent.ChildRemoved = RCoordinateEvent_Wrapper.ChildRemoved;
RCoordinateEvent.ShowWindowRequest = RCoordinateEvent_Wrapper.ShowWindowRequest;
RCoordinateEvent.PolishRequest = RCoordinateEvent_Wrapper.PolishRequest;
RCoordinateEvent.Polish = RCoordinateEvent_Wrapper.Polish;
RCoordinateEvent.LayoutRequest = RCoordinateEvent_Wrapper.LayoutRequest;
RCoordinateEvent.UpdateRequest = RCoordinateEvent_Wrapper.UpdateRequest;
RCoordinateEvent.UpdateLater = RCoordinateEvent_Wrapper.UpdateLater;
RCoordinateEvent.EmbeddingControl = RCoordinateEvent_Wrapper.EmbeddingControl;
RCoordinateEvent.ActivateControl = RCoordinateEvent_Wrapper.ActivateControl;
RCoordinateEvent.DeactivateControl = RCoordinateEvent_Wrapper.DeactivateControl;
RCoordinateEvent.ContextMenu = RCoordinateEvent_Wrapper.ContextMenu;
RCoordinateEvent.InputMethod = RCoordinateEvent_Wrapper.InputMethod;
RCoordinateEvent.TabletMove = RCoordinateEvent_Wrapper.TabletMove;
RCoordinateEvent.LocaleChange = RCoordinateEvent_Wrapper.LocaleChange;
RCoordinateEvent.LanguageChange = RCoordinateEvent_Wrapper.LanguageChange;
RCoordinateEvent.LayoutDirectionChange = RCoordinateEvent_Wrapper.LayoutDirectionChange;
RCoordinateEvent.Style = RCoordinateEvent_Wrapper.Style;
RCoordinateEvent.TabletPress = RCoordinateEvent_Wrapper.TabletPress;
RCoordinateEvent.TabletRelease = RCoordinateEvent_Wrapper.TabletRelease;
RCoordinateEvent.OkRequest = RCoordinateEvent_Wrapper.OkRequest;
RCoordinateEvent.HelpRequest = RCoordinateEvent_Wrapper.HelpRequest;
RCoordinateEvent.IconDrag = RCoordinateEvent_Wrapper.IconDrag;
RCoordinateEvent.FontChange = RCoordinateEvent_Wrapper.FontChange;
RCoordinateEvent.EnabledChange = RCoordinateEvent_Wrapper.EnabledChange;
RCoordinateEvent.ActivationChange = RCoordinateEvent_Wrapper.ActivationChange;
RCoordinateEvent.StyleChange = RCoordinateEvent_Wrapper.StyleChange;
RCoordinateEvent.IconTextChange = RCoordinateEvent_Wrapper.IconTextChange;
RCoordinateEvent.ModifiedChange = RCoordinateEvent_Wrapper.ModifiedChange;
RCoordinateEvent.MouseTrackingChange = RCoordinateEvent_Wrapper.MouseTrackingChange;
RCoordinateEvent.WindowBlocked = RCoordinateEvent_Wrapper.WindowBlocked;
RCoordinateEvent.WindowUnblocked = RCoordinateEvent_Wrapper.WindowUnblocked;
RCoordinateEvent.WindowStateChange = RCoordinateEvent_Wrapper.WindowStateChange;
RCoordinateEvent.ReadOnlyChange = RCoordinateEvent_Wrapper.ReadOnlyChange;
RCoordinateEvent.ToolTip = RCoordinateEvent_Wrapper.ToolTip;
RCoordinateEvent.WhatsThis = RCoordinateEvent_Wrapper.WhatsThis;
RCoordinateEvent.StatusTip = RCoordinateEvent_Wrapper.StatusTip;
RCoordinateEvent.ActionChanged = RCoordinateEvent_Wrapper.ActionChanged;
RCoordinateEvent.ActionAdded = RCoordinateEvent_Wrapper.ActionAdded;
RCoordinateEvent.ActionRemoved = RCoordinateEvent_Wrapper.ActionRemoved;
RCoordinateEvent.FileOpen = RCoordinateEvent_Wrapper.FileOpen;
RCoordinateEvent.Shortcut = RCoordinateEvent_Wrapper.Shortcut;
RCoordinateEvent.ShortcutOverride = RCoordinateEvent_Wrapper.ShortcutOverride;
RCoordinateEvent.WhatsThisClicked = RCoordinateEvent_Wrapper.WhatsThisClicked;
RCoordinateEvent.ToolBarChange = RCoordinateEvent_Wrapper.ToolBarChange;
RCoordinateEvent.ApplicationActivate = RCoordinateEvent_Wrapper.ApplicationActivate;
RCoordinateEvent.ApplicationActivated = RCoordinateEvent_Wrapper.ApplicationActivated;
RCoordinateEvent.ApplicationDeactivate = RCoordinateEvent_Wrapper.ApplicationDeactivate;
RCoordinateEvent.ApplicationDeactivated = RCoordinateEvent_Wrapper.ApplicationDeactivated;
RCoordinateEvent.QueryWhatsThis = RCoordinateEvent_Wrapper.QueryWhatsThis;
RCoordinateEvent.EnterWhatsThisMode = RCoordinateEvent_Wrapper.EnterWhatsThisMode;
RCoordinateEvent.LeaveWhatsThisMode = RCoordinateEvent_Wrapper.LeaveWhatsThisMode;
RCoordinateEvent.ZOrderChange = RCoordinateEvent_Wrapper.ZOrderChange;
RCoordinateEvent.HoverEnter = RCoordinateEvent_Wrapper.HoverEnter;
RCoordinateEvent.HoverLeave = RCoordinateEvent_Wrapper.HoverLeave;
RCoordinateEvent.HoverMove = RCoordinateEvent_Wrapper.HoverMove;
RCoordinateEvent.AcceptDropsChange = RCoordinateEvent_Wrapper.AcceptDropsChange;
RCoordinateEvent.ZeroTimerEvent = RCoordinateEvent_Wrapper.ZeroTimerEvent;
RCoordinateEvent.GraphicsSceneMouseMove = RCoordinateEvent_Wrapper.GraphicsSceneMouseMove;
RCoordinateEvent.GraphicsSceneMousePress = RCoordinateEvent_Wrapper.GraphicsSceneMousePress;
RCoordinateEvent.GraphicsSceneMouseRelease = RCoordinateEvent_Wrapper.GraphicsSceneMouseRelease;
RCoordinateEvent.GraphicsSceneMouseDoubleClick = RCoordinateEvent_Wrapper.GraphicsSceneMouseDoubleClick;
RCoordinateEvent.GraphicsSceneContextMenu = RCoordinateEvent_Wrapper.GraphicsSceneContextMenu;
RCoordinateEvent.GraphicsSceneHoverEnter = RCoordinateEvent_Wrapper.GraphicsSceneHoverEnter;
RCoordinateEvent.GraphicsSceneHoverMove = RCoordinateEvent_Wrapper.GraphicsSceneHoverMove;
RCoordinateEvent.GraphicsSceneHoverLeave = RCoordinateEvent_Wrapper.GraphicsSceneHoverLeave;
RCoordinateEvent.GraphicsSceneHelp = RCoordinateEvent_Wrapper.GraphicsSceneHelp;
RCoordinateEvent.GraphicsSceneDragEnter = RCoordinateEvent_Wrapper.GraphicsSceneDragEnter;
RCoordinateEvent.GraphicsSceneDragMove = RCoordinateEvent_Wrapper.GraphicsSceneDragMove;
RCoordinateEvent.GraphicsSceneDragLeave = RCoordinateEvent_Wrapper.GraphicsSceneDragLeave;
RCoordinateEvent.GraphicsSceneDrop = RCoordinateEvent_Wrapper.GraphicsSceneDrop;
RCoordinateEvent.GraphicsSceneWheel = RCoordinateEvent_Wrapper.GraphicsSceneWheel;
RCoordinateEvent.GraphicsSceneLeave = RCoordinateEvent_Wrapper.GraphicsSceneLeave;
RCoordinateEvent.KeyboardLayoutChange = RCoordinateEvent_Wrapper.KeyboardLayoutChange;
RCoordinateEvent.DynamicPropertyChange = RCoordinateEvent_Wrapper.DynamicPropertyChange;
RCoordinateEvent.TabletEnterProximity = RCoordinateEvent_Wrapper.TabletEnterProximity;
RCoordinateEvent.TabletLeaveProximity = RCoordinateEvent_Wrapper.TabletLeaveProximity;
RCoordinateEvent.NonClientAreaMouseMove = RCoordinateEvent_Wrapper.NonClientAreaMouseMove;
RCoordinateEvent.NonClientAreaMouseButtonPress = RCoordinateEvent_Wrapper.NonClientAreaMouseButtonPress;
RCoordinateEvent.NonClientAreaMouseButtonRelease = RCoordinateEvent_Wrapper.NonClientAreaMouseButtonRelease;
RCoordinateEvent.NonClientAreaMouseButtonDblClick = RCoordinateEvent_Wrapper.NonClientAreaMouseButtonDblClick;
RCoordinateEvent.MacSizeChange = RCoordinateEvent_Wrapper.MacSizeChange;
RCoordinateEvent.ContentsRectChange = RCoordinateEvent_Wrapper.ContentsRectChange;
RCoordinateEvent.MacGLWindowChange = RCoordinateEvent_Wrapper.MacGLWindowChange;
RCoordinateEvent.FutureCallOut = RCoordinateEvent_Wrapper.FutureCallOut;
RCoordinateEvent.GraphicsSceneResize = RCoordinateEvent_Wrapper.GraphicsSceneResize;
RCoordinateEvent.GraphicsSceneMove = RCoordinateEvent_Wrapper.GraphicsSceneMove;
RCoordinateEvent.CursorChange = RCoordinateEvent_Wrapper.CursorChange;
RCoordinateEvent.ToolTipChange = RCoordinateEvent_Wrapper.ToolTipChange;
RCoordinateEvent.NetworkReplyUpdated = RCoordinateEvent_Wrapper.NetworkReplyUpdated;
RCoordinateEvent.GrabMouse = RCoordinateEvent_Wrapper.GrabMouse;
RCoordinateEvent.UngrabMouse = RCoordinateEvent_Wrapper.UngrabMouse;
RCoordinateEvent.GrabKeyboard = RCoordinateEvent_Wrapper.GrabKeyboard;
RCoordinateEvent.UngrabKeyboard = RCoordinateEvent_Wrapper.UngrabKeyboard;
RCoordinateEvent.StateMachineSignal = RCoordinateEvent_Wrapper.StateMachineSignal;
RCoordinateEvent.StateMachineWrapped = RCoordinateEvent_Wrapper.StateMachineWrapped;
RCoordinateEvent.TouchBegin = RCoordinateEvent_Wrapper.TouchBegin;
RCoordinateEvent.TouchUpdate = RCoordinateEvent_Wrapper.TouchUpdate;
RCoordinateEvent.TouchEnd = RCoordinateEvent_Wrapper.TouchEnd;
RCoordinateEvent.NativeGesture = RCoordinateEvent_Wrapper.NativeGesture;
RCoordinateEvent.RequestSoftwareInputPanel = RCoordinateEvent_Wrapper.RequestSoftwareInputPanel;
RCoordinateEvent.CloseSoftwareInputPanel = RCoordinateEvent_Wrapper.CloseSoftwareInputPanel;
RCoordinateEvent.WinIdChange = RCoordinateEvent_Wrapper.WinIdChange;
RCoordinateEvent.Gesture = RCoordinateEvent_Wrapper.Gesture;
RCoordinateEvent.GestureOverride = RCoordinateEvent_Wrapper.GestureOverride;
RCoordinateEvent.ScrollPrepare = RCoordinateEvent_Wrapper.ScrollPrepare;
RCoordinateEvent.Scroll = RCoordinateEvent_Wrapper.Scroll;
RCoordinateEvent.Expose = RCoordinateEvent_Wrapper.Expose;
RCoordinateEvent.InputMethodQuery = RCoordinateEvent_Wrapper.InputMethodQuery;
RCoordinateEvent.OrientationChange = RCoordinateEvent_Wrapper.OrientationChange;
RCoordinateEvent.TouchCancel = RCoordinateEvent_Wrapper.TouchCancel;
RCoordinateEvent.ThemeChange = RCoordinateEvent_Wrapper.ThemeChange;
RCoordinateEvent.SockClose = RCoordinateEvent_Wrapper.SockClose;
RCoordinateEvent.PlatformPanel = RCoordinateEvent_Wrapper.PlatformPanel;
RCoordinateEvent.StyleAnimationUpdate = RCoordinateEvent_Wrapper.StyleAnimationUpdate;
RCoordinateEvent.ApplicationStateChange = RCoordinateEvent_Wrapper.ApplicationStateChange;
RCoordinateEvent.WindowChangeInternal = RCoordinateEvent_Wrapper.WindowChangeInternal;
RCoordinateEvent.ScreenChangeInternal = RCoordinateEvent_Wrapper.ScreenChangeInternal;
RCoordinateEvent.PlatformSurface = RCoordinateEvent_Wrapper.PlatformSurface;
RCoordinateEvent.Pointer = RCoordinateEvent_Wrapper.Pointer;
RCoordinateEvent.TabletTrackingChange = RCoordinateEvent_Wrapper.TabletTrackingChange;
RCoordinateEvent.User = RCoordinateEvent_Wrapper.User;
RCoordinateEvent.MaxUser = RCoordinateEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCoordinateEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCoordinateEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    