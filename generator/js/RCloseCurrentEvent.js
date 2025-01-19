
      // auto generated
      //var self;

      // class constructor:
      function RCloseCurrentEvent() {
        

        // should be RCloseCurrentEvent_BaseJs.call(this, engine):
        //RCloseCurrentEvent.prototype = new RCloseCurrentEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCloseCurrentEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RCloseCurrentEvent);
            //}
          }
          else {
            qWarning("RCloseCurrentEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RCloseCurrentEvent_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCloseCurrentEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCloseCurrentEvent);
  }

  
  else {
    
        print("RCloseCurrentEvent(): wrong number / type of arguments");
      
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

      //RCloseCurrentEvent.prototype = new RCloseCurrentEvent_BaseJs(engine);
      //RCloseCurrentEvent.prototype = new RCloseCurrentEvent_Wrapper(engine);
      RCloseCurrentEvent.prototype = new Object();

      RCloseCurrentEvent.prototype.toString = function() {
          //return "RCloseCurrentEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCloseCurrentEvent [JS]";
        };
      RCloseCurrentEvent.getObjectType = function() {
        return RJSType_RCloseCurrentEvent.getIdStatic();
      };

      RCloseCurrentEvent.prototype.getObjectType = function() {
        return RJSType_RCloseCurrentEvent.getIdStatic();
      };

      RCloseCurrentEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCloseCurrentEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RCloseCurrentEvent.None = RCloseCurrentEvent_Wrapper.None;
RCloseCurrentEvent.Timer = RCloseCurrentEvent_Wrapper.Timer;
RCloseCurrentEvent.MouseButtonPress = RCloseCurrentEvent_Wrapper.MouseButtonPress;
RCloseCurrentEvent.MouseButtonRelease = RCloseCurrentEvent_Wrapper.MouseButtonRelease;
RCloseCurrentEvent.MouseButtonDblClick = RCloseCurrentEvent_Wrapper.MouseButtonDblClick;
RCloseCurrentEvent.MouseMove = RCloseCurrentEvent_Wrapper.MouseMove;
RCloseCurrentEvent.KeyPress = RCloseCurrentEvent_Wrapper.KeyPress;
RCloseCurrentEvent.KeyRelease = RCloseCurrentEvent_Wrapper.KeyRelease;
RCloseCurrentEvent.FocusIn = RCloseCurrentEvent_Wrapper.FocusIn;
RCloseCurrentEvent.FocusOut = RCloseCurrentEvent_Wrapper.FocusOut;
RCloseCurrentEvent.FocusAboutToChange = RCloseCurrentEvent_Wrapper.FocusAboutToChange;
RCloseCurrentEvent.Enter = RCloseCurrentEvent_Wrapper.Enter;
RCloseCurrentEvent.Leave = RCloseCurrentEvent_Wrapper.Leave;
RCloseCurrentEvent.Paint = RCloseCurrentEvent_Wrapper.Paint;
RCloseCurrentEvent.Move = RCloseCurrentEvent_Wrapper.Move;
RCloseCurrentEvent.Resize = RCloseCurrentEvent_Wrapper.Resize;
RCloseCurrentEvent.Create = RCloseCurrentEvent_Wrapper.Create;
RCloseCurrentEvent.Destroy = RCloseCurrentEvent_Wrapper.Destroy;
RCloseCurrentEvent.Show = RCloseCurrentEvent_Wrapper.Show;
RCloseCurrentEvent.Hide = RCloseCurrentEvent_Wrapper.Hide;
RCloseCurrentEvent.Close = RCloseCurrentEvent_Wrapper.Close;
RCloseCurrentEvent.Quit = RCloseCurrentEvent_Wrapper.Quit;
RCloseCurrentEvent.ParentChange = RCloseCurrentEvent_Wrapper.ParentChange;
RCloseCurrentEvent.ParentAboutToChange = RCloseCurrentEvent_Wrapper.ParentAboutToChange;
RCloseCurrentEvent.ThreadChange = RCloseCurrentEvent_Wrapper.ThreadChange;
RCloseCurrentEvent.WindowActivate = RCloseCurrentEvent_Wrapper.WindowActivate;
RCloseCurrentEvent.WindowDeactivate = RCloseCurrentEvent_Wrapper.WindowDeactivate;
RCloseCurrentEvent.ShowToParent = RCloseCurrentEvent_Wrapper.ShowToParent;
RCloseCurrentEvent.HideToParent = RCloseCurrentEvent_Wrapper.HideToParent;
RCloseCurrentEvent.Wheel = RCloseCurrentEvent_Wrapper.Wheel;
RCloseCurrentEvent.WindowTitleChange = RCloseCurrentEvent_Wrapper.WindowTitleChange;
RCloseCurrentEvent.WindowIconChange = RCloseCurrentEvent_Wrapper.WindowIconChange;
RCloseCurrentEvent.ApplicationWindowIconChange = RCloseCurrentEvent_Wrapper.ApplicationWindowIconChange;
RCloseCurrentEvent.ApplicationFontChange = RCloseCurrentEvent_Wrapper.ApplicationFontChange;
RCloseCurrentEvent.ApplicationLayoutDirectionChange = RCloseCurrentEvent_Wrapper.ApplicationLayoutDirectionChange;
RCloseCurrentEvent.ApplicationPaletteChange = RCloseCurrentEvent_Wrapper.ApplicationPaletteChange;
RCloseCurrentEvent.PaletteChange = RCloseCurrentEvent_Wrapper.PaletteChange;
RCloseCurrentEvent.Clipboard = RCloseCurrentEvent_Wrapper.Clipboard;
RCloseCurrentEvent.Speech = RCloseCurrentEvent_Wrapper.Speech;
RCloseCurrentEvent.MetaCall = RCloseCurrentEvent_Wrapper.MetaCall;
RCloseCurrentEvent.SockAct = RCloseCurrentEvent_Wrapper.SockAct;
RCloseCurrentEvent.WinEventAct = RCloseCurrentEvent_Wrapper.WinEventAct;
RCloseCurrentEvent.DeferredDelete = RCloseCurrentEvent_Wrapper.DeferredDelete;
RCloseCurrentEvent.DragEnter = RCloseCurrentEvent_Wrapper.DragEnter;
RCloseCurrentEvent.DragMove = RCloseCurrentEvent_Wrapper.DragMove;
RCloseCurrentEvent.DragLeave = RCloseCurrentEvent_Wrapper.DragLeave;
RCloseCurrentEvent.Drop = RCloseCurrentEvent_Wrapper.Drop;
RCloseCurrentEvent.DragResponse = RCloseCurrentEvent_Wrapper.DragResponse;
RCloseCurrentEvent.ChildAdded = RCloseCurrentEvent_Wrapper.ChildAdded;
RCloseCurrentEvent.ChildPolished = RCloseCurrentEvent_Wrapper.ChildPolished;
RCloseCurrentEvent.ChildRemoved = RCloseCurrentEvent_Wrapper.ChildRemoved;
RCloseCurrentEvent.ShowWindowRequest = RCloseCurrentEvent_Wrapper.ShowWindowRequest;
RCloseCurrentEvent.PolishRequest = RCloseCurrentEvent_Wrapper.PolishRequest;
RCloseCurrentEvent.Polish = RCloseCurrentEvent_Wrapper.Polish;
RCloseCurrentEvent.LayoutRequest = RCloseCurrentEvent_Wrapper.LayoutRequest;
RCloseCurrentEvent.UpdateRequest = RCloseCurrentEvent_Wrapper.UpdateRequest;
RCloseCurrentEvent.UpdateLater = RCloseCurrentEvent_Wrapper.UpdateLater;
RCloseCurrentEvent.EmbeddingControl = RCloseCurrentEvent_Wrapper.EmbeddingControl;
RCloseCurrentEvent.ActivateControl = RCloseCurrentEvent_Wrapper.ActivateControl;
RCloseCurrentEvent.DeactivateControl = RCloseCurrentEvent_Wrapper.DeactivateControl;
RCloseCurrentEvent.ContextMenu = RCloseCurrentEvent_Wrapper.ContextMenu;
RCloseCurrentEvent.InputMethod = RCloseCurrentEvent_Wrapper.InputMethod;
RCloseCurrentEvent.TabletMove = RCloseCurrentEvent_Wrapper.TabletMove;
RCloseCurrentEvent.LocaleChange = RCloseCurrentEvent_Wrapper.LocaleChange;
RCloseCurrentEvent.LanguageChange = RCloseCurrentEvent_Wrapper.LanguageChange;
RCloseCurrentEvent.LayoutDirectionChange = RCloseCurrentEvent_Wrapper.LayoutDirectionChange;
RCloseCurrentEvent.Style = RCloseCurrentEvent_Wrapper.Style;
RCloseCurrentEvent.TabletPress = RCloseCurrentEvent_Wrapper.TabletPress;
RCloseCurrentEvent.TabletRelease = RCloseCurrentEvent_Wrapper.TabletRelease;
RCloseCurrentEvent.OkRequest = RCloseCurrentEvent_Wrapper.OkRequest;
RCloseCurrentEvent.HelpRequest = RCloseCurrentEvent_Wrapper.HelpRequest;
RCloseCurrentEvent.IconDrag = RCloseCurrentEvent_Wrapper.IconDrag;
RCloseCurrentEvent.FontChange = RCloseCurrentEvent_Wrapper.FontChange;
RCloseCurrentEvent.EnabledChange = RCloseCurrentEvent_Wrapper.EnabledChange;
RCloseCurrentEvent.ActivationChange = RCloseCurrentEvent_Wrapper.ActivationChange;
RCloseCurrentEvent.StyleChange = RCloseCurrentEvent_Wrapper.StyleChange;
RCloseCurrentEvent.IconTextChange = RCloseCurrentEvent_Wrapper.IconTextChange;
RCloseCurrentEvent.ModifiedChange = RCloseCurrentEvent_Wrapper.ModifiedChange;
RCloseCurrentEvent.MouseTrackingChange = RCloseCurrentEvent_Wrapper.MouseTrackingChange;
RCloseCurrentEvent.WindowBlocked = RCloseCurrentEvent_Wrapper.WindowBlocked;
RCloseCurrentEvent.WindowUnblocked = RCloseCurrentEvent_Wrapper.WindowUnblocked;
RCloseCurrentEvent.WindowStateChange = RCloseCurrentEvent_Wrapper.WindowStateChange;
RCloseCurrentEvent.ReadOnlyChange = RCloseCurrentEvent_Wrapper.ReadOnlyChange;
RCloseCurrentEvent.ToolTip = RCloseCurrentEvent_Wrapper.ToolTip;
RCloseCurrentEvent.WhatsThis = RCloseCurrentEvent_Wrapper.WhatsThis;
RCloseCurrentEvent.StatusTip = RCloseCurrentEvent_Wrapper.StatusTip;
RCloseCurrentEvent.ActionChanged = RCloseCurrentEvent_Wrapper.ActionChanged;
RCloseCurrentEvent.ActionAdded = RCloseCurrentEvent_Wrapper.ActionAdded;
RCloseCurrentEvent.ActionRemoved = RCloseCurrentEvent_Wrapper.ActionRemoved;
RCloseCurrentEvent.FileOpen = RCloseCurrentEvent_Wrapper.FileOpen;
RCloseCurrentEvent.Shortcut = RCloseCurrentEvent_Wrapper.Shortcut;
RCloseCurrentEvent.ShortcutOverride = RCloseCurrentEvent_Wrapper.ShortcutOverride;
RCloseCurrentEvent.WhatsThisClicked = RCloseCurrentEvent_Wrapper.WhatsThisClicked;
RCloseCurrentEvent.ToolBarChange = RCloseCurrentEvent_Wrapper.ToolBarChange;
RCloseCurrentEvent.ApplicationActivate = RCloseCurrentEvent_Wrapper.ApplicationActivate;
RCloseCurrentEvent.ApplicationActivated = RCloseCurrentEvent_Wrapper.ApplicationActivated;
RCloseCurrentEvent.ApplicationDeactivate = RCloseCurrentEvent_Wrapper.ApplicationDeactivate;
RCloseCurrentEvent.ApplicationDeactivated = RCloseCurrentEvent_Wrapper.ApplicationDeactivated;
RCloseCurrentEvent.QueryWhatsThis = RCloseCurrentEvent_Wrapper.QueryWhatsThis;
RCloseCurrentEvent.EnterWhatsThisMode = RCloseCurrentEvent_Wrapper.EnterWhatsThisMode;
RCloseCurrentEvent.LeaveWhatsThisMode = RCloseCurrentEvent_Wrapper.LeaveWhatsThisMode;
RCloseCurrentEvent.ZOrderChange = RCloseCurrentEvent_Wrapper.ZOrderChange;
RCloseCurrentEvent.HoverEnter = RCloseCurrentEvent_Wrapper.HoverEnter;
RCloseCurrentEvent.HoverLeave = RCloseCurrentEvent_Wrapper.HoverLeave;
RCloseCurrentEvent.HoverMove = RCloseCurrentEvent_Wrapper.HoverMove;
RCloseCurrentEvent.AcceptDropsChange = RCloseCurrentEvent_Wrapper.AcceptDropsChange;
RCloseCurrentEvent.ZeroTimerEvent = RCloseCurrentEvent_Wrapper.ZeroTimerEvent;
RCloseCurrentEvent.GraphicsSceneMouseMove = RCloseCurrentEvent_Wrapper.GraphicsSceneMouseMove;
RCloseCurrentEvent.GraphicsSceneMousePress = RCloseCurrentEvent_Wrapper.GraphicsSceneMousePress;
RCloseCurrentEvent.GraphicsSceneMouseRelease = RCloseCurrentEvent_Wrapper.GraphicsSceneMouseRelease;
RCloseCurrentEvent.GraphicsSceneMouseDoubleClick = RCloseCurrentEvent_Wrapper.GraphicsSceneMouseDoubleClick;
RCloseCurrentEvent.GraphicsSceneContextMenu = RCloseCurrentEvent_Wrapper.GraphicsSceneContextMenu;
RCloseCurrentEvent.GraphicsSceneHoverEnter = RCloseCurrentEvent_Wrapper.GraphicsSceneHoverEnter;
RCloseCurrentEvent.GraphicsSceneHoverMove = RCloseCurrentEvent_Wrapper.GraphicsSceneHoverMove;
RCloseCurrentEvent.GraphicsSceneHoverLeave = RCloseCurrentEvent_Wrapper.GraphicsSceneHoverLeave;
RCloseCurrentEvent.GraphicsSceneHelp = RCloseCurrentEvent_Wrapper.GraphicsSceneHelp;
RCloseCurrentEvent.GraphicsSceneDragEnter = RCloseCurrentEvent_Wrapper.GraphicsSceneDragEnter;
RCloseCurrentEvent.GraphicsSceneDragMove = RCloseCurrentEvent_Wrapper.GraphicsSceneDragMove;
RCloseCurrentEvent.GraphicsSceneDragLeave = RCloseCurrentEvent_Wrapper.GraphicsSceneDragLeave;
RCloseCurrentEvent.GraphicsSceneDrop = RCloseCurrentEvent_Wrapper.GraphicsSceneDrop;
RCloseCurrentEvent.GraphicsSceneWheel = RCloseCurrentEvent_Wrapper.GraphicsSceneWheel;
RCloseCurrentEvent.GraphicsSceneLeave = RCloseCurrentEvent_Wrapper.GraphicsSceneLeave;
RCloseCurrentEvent.KeyboardLayoutChange = RCloseCurrentEvent_Wrapper.KeyboardLayoutChange;
RCloseCurrentEvent.DynamicPropertyChange = RCloseCurrentEvent_Wrapper.DynamicPropertyChange;
RCloseCurrentEvent.TabletEnterProximity = RCloseCurrentEvent_Wrapper.TabletEnterProximity;
RCloseCurrentEvent.TabletLeaveProximity = RCloseCurrentEvent_Wrapper.TabletLeaveProximity;
RCloseCurrentEvent.NonClientAreaMouseMove = RCloseCurrentEvent_Wrapper.NonClientAreaMouseMove;
RCloseCurrentEvent.NonClientAreaMouseButtonPress = RCloseCurrentEvent_Wrapper.NonClientAreaMouseButtonPress;
RCloseCurrentEvent.NonClientAreaMouseButtonRelease = RCloseCurrentEvent_Wrapper.NonClientAreaMouseButtonRelease;
RCloseCurrentEvent.NonClientAreaMouseButtonDblClick = RCloseCurrentEvent_Wrapper.NonClientAreaMouseButtonDblClick;
RCloseCurrentEvent.MacSizeChange = RCloseCurrentEvent_Wrapper.MacSizeChange;
RCloseCurrentEvent.ContentsRectChange = RCloseCurrentEvent_Wrapper.ContentsRectChange;
RCloseCurrentEvent.MacGLWindowChange = RCloseCurrentEvent_Wrapper.MacGLWindowChange;
RCloseCurrentEvent.FutureCallOut = RCloseCurrentEvent_Wrapper.FutureCallOut;
RCloseCurrentEvent.GraphicsSceneResize = RCloseCurrentEvent_Wrapper.GraphicsSceneResize;
RCloseCurrentEvent.GraphicsSceneMove = RCloseCurrentEvent_Wrapper.GraphicsSceneMove;
RCloseCurrentEvent.CursorChange = RCloseCurrentEvent_Wrapper.CursorChange;
RCloseCurrentEvent.ToolTipChange = RCloseCurrentEvent_Wrapper.ToolTipChange;
RCloseCurrentEvent.NetworkReplyUpdated = RCloseCurrentEvent_Wrapper.NetworkReplyUpdated;
RCloseCurrentEvent.GrabMouse = RCloseCurrentEvent_Wrapper.GrabMouse;
RCloseCurrentEvent.UngrabMouse = RCloseCurrentEvent_Wrapper.UngrabMouse;
RCloseCurrentEvent.GrabKeyboard = RCloseCurrentEvent_Wrapper.GrabKeyboard;
RCloseCurrentEvent.UngrabKeyboard = RCloseCurrentEvent_Wrapper.UngrabKeyboard;
RCloseCurrentEvent.StateMachineSignal = RCloseCurrentEvent_Wrapper.StateMachineSignal;
RCloseCurrentEvent.StateMachineWrapped = RCloseCurrentEvent_Wrapper.StateMachineWrapped;
RCloseCurrentEvent.TouchBegin = RCloseCurrentEvent_Wrapper.TouchBegin;
RCloseCurrentEvent.TouchUpdate = RCloseCurrentEvent_Wrapper.TouchUpdate;
RCloseCurrentEvent.TouchEnd = RCloseCurrentEvent_Wrapper.TouchEnd;
RCloseCurrentEvent.NativeGesture = RCloseCurrentEvent_Wrapper.NativeGesture;
RCloseCurrentEvent.RequestSoftwareInputPanel = RCloseCurrentEvent_Wrapper.RequestSoftwareInputPanel;
RCloseCurrentEvent.CloseSoftwareInputPanel = RCloseCurrentEvent_Wrapper.CloseSoftwareInputPanel;
RCloseCurrentEvent.WinIdChange = RCloseCurrentEvent_Wrapper.WinIdChange;
RCloseCurrentEvent.Gesture = RCloseCurrentEvent_Wrapper.Gesture;
RCloseCurrentEvent.GestureOverride = RCloseCurrentEvent_Wrapper.GestureOverride;
RCloseCurrentEvent.ScrollPrepare = RCloseCurrentEvent_Wrapper.ScrollPrepare;
RCloseCurrentEvent.Scroll = RCloseCurrentEvent_Wrapper.Scroll;
RCloseCurrentEvent.Expose = RCloseCurrentEvent_Wrapper.Expose;
RCloseCurrentEvent.InputMethodQuery = RCloseCurrentEvent_Wrapper.InputMethodQuery;
RCloseCurrentEvent.OrientationChange = RCloseCurrentEvent_Wrapper.OrientationChange;
RCloseCurrentEvent.TouchCancel = RCloseCurrentEvent_Wrapper.TouchCancel;
RCloseCurrentEvent.ThemeChange = RCloseCurrentEvent_Wrapper.ThemeChange;
RCloseCurrentEvent.SockClose = RCloseCurrentEvent_Wrapper.SockClose;
RCloseCurrentEvent.PlatformPanel = RCloseCurrentEvent_Wrapper.PlatformPanel;
RCloseCurrentEvent.StyleAnimationUpdate = RCloseCurrentEvent_Wrapper.StyleAnimationUpdate;
RCloseCurrentEvent.ApplicationStateChange = RCloseCurrentEvent_Wrapper.ApplicationStateChange;
RCloseCurrentEvent.WindowChangeInternal = RCloseCurrentEvent_Wrapper.WindowChangeInternal;
RCloseCurrentEvent.ScreenChangeInternal = RCloseCurrentEvent_Wrapper.ScreenChangeInternal;
RCloseCurrentEvent.PlatformSurface = RCloseCurrentEvent_Wrapper.PlatformSurface;
RCloseCurrentEvent.Pointer = RCloseCurrentEvent_Wrapper.Pointer;
RCloseCurrentEvent.TabletTrackingChange = RCloseCurrentEvent_Wrapper.TabletTrackingChange;
RCloseCurrentEvent.User = RCloseCurrentEvent_Wrapper.User;
RCloseCurrentEvent.MaxUser = RCloseCurrentEvent_Wrapper.MaxUser;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCloseCurrentEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCloseCurrentEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    