
      // auto generated
      //var self;

      // class constructor:
      function RMouseEvent() {
        

        // should be RMouseEvent_BaseJs.call(this, engine):
        //RMouseEvent.prototype = new RMouseEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMouseEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("RMouseEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 7) {
    
            self = this;
            wrapper = new RMouseEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMouseEvent);
  }

  
  else 
  
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new RMouseEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMouseEvent);
  }

  
  else {
    
        print("RMouseEvent(): wrong number / type of arguments");
      
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

      //RMouseEvent.prototype = new RMouseEvent_BaseJs(engine);
      //RMouseEvent.prototype = new RMouseEvent_Wrapper(engine);
      RMouseEvent.prototype = new Object();


      RMouseEvent.prototype.toString = function() {
          //return "RMouseEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMouseEvent [JS]";
        };
      RMouseEvent.getObjectType = function() {
        return RJSType_RMouseEvent.getIdStatic();
      };

      RMouseEvent.prototype.getObjectType = function() {
        return RJSType_RMouseEvent.getIdStatic();
      };

      RMouseEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMouseEvent.getIdStatic()) {
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
        
          if (t===RJSType_QMouseEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RInputEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RMouseEvent.None = RMouseEvent_Wrapper.None;
RMouseEvent.Timer = RMouseEvent_Wrapper.Timer;
RMouseEvent.MouseButtonPress = RMouseEvent_Wrapper.MouseButtonPress;
RMouseEvent.MouseButtonRelease = RMouseEvent_Wrapper.MouseButtonRelease;
RMouseEvent.MouseButtonDblClick = RMouseEvent_Wrapper.MouseButtonDblClick;
RMouseEvent.MouseMove = RMouseEvent_Wrapper.MouseMove;
RMouseEvent.KeyPress = RMouseEvent_Wrapper.KeyPress;
RMouseEvent.KeyRelease = RMouseEvent_Wrapper.KeyRelease;
RMouseEvent.FocusIn = RMouseEvent_Wrapper.FocusIn;
RMouseEvent.FocusOut = RMouseEvent_Wrapper.FocusOut;
RMouseEvent.FocusAboutToChange = RMouseEvent_Wrapper.FocusAboutToChange;
RMouseEvent.Enter = RMouseEvent_Wrapper.Enter;
RMouseEvent.Leave = RMouseEvent_Wrapper.Leave;
RMouseEvent.Paint = RMouseEvent_Wrapper.Paint;
RMouseEvent.Move = RMouseEvent_Wrapper.Move;
RMouseEvent.Resize = RMouseEvent_Wrapper.Resize;
RMouseEvent.Create = RMouseEvent_Wrapper.Create;
RMouseEvent.Destroy = RMouseEvent_Wrapper.Destroy;
RMouseEvent.Show = RMouseEvent_Wrapper.Show;
RMouseEvent.Hide = RMouseEvent_Wrapper.Hide;
RMouseEvent.Close = RMouseEvent_Wrapper.Close;
RMouseEvent.Quit = RMouseEvent_Wrapper.Quit;
RMouseEvent.ParentChange = RMouseEvent_Wrapper.ParentChange;
RMouseEvent.ParentAboutToChange = RMouseEvent_Wrapper.ParentAboutToChange;
RMouseEvent.ThreadChange = RMouseEvent_Wrapper.ThreadChange;
RMouseEvent.WindowActivate = RMouseEvent_Wrapper.WindowActivate;
RMouseEvent.WindowDeactivate = RMouseEvent_Wrapper.WindowDeactivate;
RMouseEvent.ShowToParent = RMouseEvent_Wrapper.ShowToParent;
RMouseEvent.HideToParent = RMouseEvent_Wrapper.HideToParent;
RMouseEvent.Wheel = RMouseEvent_Wrapper.Wheel;
RMouseEvent.WindowTitleChange = RMouseEvent_Wrapper.WindowTitleChange;
RMouseEvent.WindowIconChange = RMouseEvent_Wrapper.WindowIconChange;
RMouseEvent.ApplicationWindowIconChange = RMouseEvent_Wrapper.ApplicationWindowIconChange;
RMouseEvent.ApplicationFontChange = RMouseEvent_Wrapper.ApplicationFontChange;
RMouseEvent.ApplicationLayoutDirectionChange = RMouseEvent_Wrapper.ApplicationLayoutDirectionChange;
RMouseEvent.ApplicationPaletteChange = RMouseEvent_Wrapper.ApplicationPaletteChange;
RMouseEvent.PaletteChange = RMouseEvent_Wrapper.PaletteChange;
RMouseEvent.Clipboard = RMouseEvent_Wrapper.Clipboard;
RMouseEvent.Speech = RMouseEvent_Wrapper.Speech;
RMouseEvent.MetaCall = RMouseEvent_Wrapper.MetaCall;
RMouseEvent.SockAct = RMouseEvent_Wrapper.SockAct;
RMouseEvent.WinEventAct = RMouseEvent_Wrapper.WinEventAct;
RMouseEvent.DeferredDelete = RMouseEvent_Wrapper.DeferredDelete;
RMouseEvent.DragEnter = RMouseEvent_Wrapper.DragEnter;
RMouseEvent.DragMove = RMouseEvent_Wrapper.DragMove;
RMouseEvent.DragLeave = RMouseEvent_Wrapper.DragLeave;
RMouseEvent.Drop = RMouseEvent_Wrapper.Drop;
RMouseEvent.DragResponse = RMouseEvent_Wrapper.DragResponse;
RMouseEvent.ChildAdded = RMouseEvent_Wrapper.ChildAdded;
RMouseEvent.ChildPolished = RMouseEvent_Wrapper.ChildPolished;
RMouseEvent.ChildRemoved = RMouseEvent_Wrapper.ChildRemoved;
RMouseEvent.ShowWindowRequest = RMouseEvent_Wrapper.ShowWindowRequest;
RMouseEvent.PolishRequest = RMouseEvent_Wrapper.PolishRequest;
RMouseEvent.Polish = RMouseEvent_Wrapper.Polish;
RMouseEvent.LayoutRequest = RMouseEvent_Wrapper.LayoutRequest;
RMouseEvent.UpdateRequest = RMouseEvent_Wrapper.UpdateRequest;
RMouseEvent.UpdateLater = RMouseEvent_Wrapper.UpdateLater;
RMouseEvent.EmbeddingControl = RMouseEvent_Wrapper.EmbeddingControl;
RMouseEvent.ActivateControl = RMouseEvent_Wrapper.ActivateControl;
RMouseEvent.DeactivateControl = RMouseEvent_Wrapper.DeactivateControl;
RMouseEvent.ContextMenu = RMouseEvent_Wrapper.ContextMenu;
RMouseEvent.InputMethod = RMouseEvent_Wrapper.InputMethod;
RMouseEvent.TabletMove = RMouseEvent_Wrapper.TabletMove;
RMouseEvent.LocaleChange = RMouseEvent_Wrapper.LocaleChange;
RMouseEvent.LanguageChange = RMouseEvent_Wrapper.LanguageChange;
RMouseEvent.LayoutDirectionChange = RMouseEvent_Wrapper.LayoutDirectionChange;
RMouseEvent.Style = RMouseEvent_Wrapper.Style;
RMouseEvent.TabletPress = RMouseEvent_Wrapper.TabletPress;
RMouseEvent.TabletRelease = RMouseEvent_Wrapper.TabletRelease;
RMouseEvent.OkRequest = RMouseEvent_Wrapper.OkRequest;
RMouseEvent.HelpRequest = RMouseEvent_Wrapper.HelpRequest;
RMouseEvent.IconDrag = RMouseEvent_Wrapper.IconDrag;
RMouseEvent.FontChange = RMouseEvent_Wrapper.FontChange;
RMouseEvent.EnabledChange = RMouseEvent_Wrapper.EnabledChange;
RMouseEvent.ActivationChange = RMouseEvent_Wrapper.ActivationChange;
RMouseEvent.StyleChange = RMouseEvent_Wrapper.StyleChange;
RMouseEvent.IconTextChange = RMouseEvent_Wrapper.IconTextChange;
RMouseEvent.ModifiedChange = RMouseEvent_Wrapper.ModifiedChange;
RMouseEvent.MouseTrackingChange = RMouseEvent_Wrapper.MouseTrackingChange;
RMouseEvent.WindowBlocked = RMouseEvent_Wrapper.WindowBlocked;
RMouseEvent.WindowUnblocked = RMouseEvent_Wrapper.WindowUnblocked;
RMouseEvent.WindowStateChange = RMouseEvent_Wrapper.WindowStateChange;
RMouseEvent.ReadOnlyChange = RMouseEvent_Wrapper.ReadOnlyChange;
RMouseEvent.ToolTip = RMouseEvent_Wrapper.ToolTip;
RMouseEvent.WhatsThis = RMouseEvent_Wrapper.WhatsThis;
RMouseEvent.StatusTip = RMouseEvent_Wrapper.StatusTip;
RMouseEvent.ActionChanged = RMouseEvent_Wrapper.ActionChanged;
RMouseEvent.ActionAdded = RMouseEvent_Wrapper.ActionAdded;
RMouseEvent.ActionRemoved = RMouseEvent_Wrapper.ActionRemoved;
RMouseEvent.FileOpen = RMouseEvent_Wrapper.FileOpen;
RMouseEvent.Shortcut = RMouseEvent_Wrapper.Shortcut;
RMouseEvent.ShortcutOverride = RMouseEvent_Wrapper.ShortcutOverride;
RMouseEvent.WhatsThisClicked = RMouseEvent_Wrapper.WhatsThisClicked;
RMouseEvent.ToolBarChange = RMouseEvent_Wrapper.ToolBarChange;
RMouseEvent.ApplicationActivate = RMouseEvent_Wrapper.ApplicationActivate;
RMouseEvent.ApplicationActivated = RMouseEvent_Wrapper.ApplicationActivated;
RMouseEvent.ApplicationDeactivate = RMouseEvent_Wrapper.ApplicationDeactivate;
RMouseEvent.ApplicationDeactivated = RMouseEvent_Wrapper.ApplicationDeactivated;
RMouseEvent.QueryWhatsThis = RMouseEvent_Wrapper.QueryWhatsThis;
RMouseEvent.EnterWhatsThisMode = RMouseEvent_Wrapper.EnterWhatsThisMode;
RMouseEvent.LeaveWhatsThisMode = RMouseEvent_Wrapper.LeaveWhatsThisMode;
RMouseEvent.ZOrderChange = RMouseEvent_Wrapper.ZOrderChange;
RMouseEvent.HoverEnter = RMouseEvent_Wrapper.HoverEnter;
RMouseEvent.HoverLeave = RMouseEvent_Wrapper.HoverLeave;
RMouseEvent.HoverMove = RMouseEvent_Wrapper.HoverMove;
RMouseEvent.AcceptDropsChange = RMouseEvent_Wrapper.AcceptDropsChange;
RMouseEvent.ZeroTimerEvent = RMouseEvent_Wrapper.ZeroTimerEvent;
RMouseEvent.GraphicsSceneMouseMove = RMouseEvent_Wrapper.GraphicsSceneMouseMove;
RMouseEvent.GraphicsSceneMousePress = RMouseEvent_Wrapper.GraphicsSceneMousePress;
RMouseEvent.GraphicsSceneMouseRelease = RMouseEvent_Wrapper.GraphicsSceneMouseRelease;
RMouseEvent.GraphicsSceneMouseDoubleClick = RMouseEvent_Wrapper.GraphicsSceneMouseDoubleClick;
RMouseEvent.GraphicsSceneContextMenu = RMouseEvent_Wrapper.GraphicsSceneContextMenu;
RMouseEvent.GraphicsSceneHoverEnter = RMouseEvent_Wrapper.GraphicsSceneHoverEnter;
RMouseEvent.GraphicsSceneHoverMove = RMouseEvent_Wrapper.GraphicsSceneHoverMove;
RMouseEvent.GraphicsSceneHoverLeave = RMouseEvent_Wrapper.GraphicsSceneHoverLeave;
RMouseEvent.GraphicsSceneHelp = RMouseEvent_Wrapper.GraphicsSceneHelp;
RMouseEvent.GraphicsSceneDragEnter = RMouseEvent_Wrapper.GraphicsSceneDragEnter;
RMouseEvent.GraphicsSceneDragMove = RMouseEvent_Wrapper.GraphicsSceneDragMove;
RMouseEvent.GraphicsSceneDragLeave = RMouseEvent_Wrapper.GraphicsSceneDragLeave;
RMouseEvent.GraphicsSceneDrop = RMouseEvent_Wrapper.GraphicsSceneDrop;
RMouseEvent.GraphicsSceneWheel = RMouseEvent_Wrapper.GraphicsSceneWheel;
RMouseEvent.GraphicsSceneLeave = RMouseEvent_Wrapper.GraphicsSceneLeave;
RMouseEvent.KeyboardLayoutChange = RMouseEvent_Wrapper.KeyboardLayoutChange;
RMouseEvent.DynamicPropertyChange = RMouseEvent_Wrapper.DynamicPropertyChange;
RMouseEvent.TabletEnterProximity = RMouseEvent_Wrapper.TabletEnterProximity;
RMouseEvent.TabletLeaveProximity = RMouseEvent_Wrapper.TabletLeaveProximity;
RMouseEvent.NonClientAreaMouseMove = RMouseEvent_Wrapper.NonClientAreaMouseMove;
RMouseEvent.NonClientAreaMouseButtonPress = RMouseEvent_Wrapper.NonClientAreaMouseButtonPress;
RMouseEvent.NonClientAreaMouseButtonRelease = RMouseEvent_Wrapper.NonClientAreaMouseButtonRelease;
RMouseEvent.NonClientAreaMouseButtonDblClick = RMouseEvent_Wrapper.NonClientAreaMouseButtonDblClick;
RMouseEvent.MacSizeChange = RMouseEvent_Wrapper.MacSizeChange;
RMouseEvent.ContentsRectChange = RMouseEvent_Wrapper.ContentsRectChange;
RMouseEvent.MacGLWindowChange = RMouseEvent_Wrapper.MacGLWindowChange;
RMouseEvent.FutureCallOut = RMouseEvent_Wrapper.FutureCallOut;
RMouseEvent.GraphicsSceneResize = RMouseEvent_Wrapper.GraphicsSceneResize;
RMouseEvent.GraphicsSceneMove = RMouseEvent_Wrapper.GraphicsSceneMove;
RMouseEvent.CursorChange = RMouseEvent_Wrapper.CursorChange;
RMouseEvent.ToolTipChange = RMouseEvent_Wrapper.ToolTipChange;
RMouseEvent.NetworkReplyUpdated = RMouseEvent_Wrapper.NetworkReplyUpdated;
RMouseEvent.GrabMouse = RMouseEvent_Wrapper.GrabMouse;
RMouseEvent.UngrabMouse = RMouseEvent_Wrapper.UngrabMouse;
RMouseEvent.GrabKeyboard = RMouseEvent_Wrapper.GrabKeyboard;
RMouseEvent.UngrabKeyboard = RMouseEvent_Wrapper.UngrabKeyboard;
RMouseEvent.StateMachineSignal = RMouseEvent_Wrapper.StateMachineSignal;
RMouseEvent.StateMachineWrapped = RMouseEvent_Wrapper.StateMachineWrapped;
RMouseEvent.TouchBegin = RMouseEvent_Wrapper.TouchBegin;
RMouseEvent.TouchUpdate = RMouseEvent_Wrapper.TouchUpdate;
RMouseEvent.TouchEnd = RMouseEvent_Wrapper.TouchEnd;
RMouseEvent.NativeGesture = RMouseEvent_Wrapper.NativeGesture;
RMouseEvent.RequestSoftwareInputPanel = RMouseEvent_Wrapper.RequestSoftwareInputPanel;
RMouseEvent.CloseSoftwareInputPanel = RMouseEvent_Wrapper.CloseSoftwareInputPanel;
RMouseEvent.WinIdChange = RMouseEvent_Wrapper.WinIdChange;
RMouseEvent.Gesture = RMouseEvent_Wrapper.Gesture;
RMouseEvent.GestureOverride = RMouseEvent_Wrapper.GestureOverride;
RMouseEvent.ScrollPrepare = RMouseEvent_Wrapper.ScrollPrepare;
RMouseEvent.Scroll = RMouseEvent_Wrapper.Scroll;
RMouseEvent.Expose = RMouseEvent_Wrapper.Expose;
RMouseEvent.InputMethodQuery = RMouseEvent_Wrapper.InputMethodQuery;
RMouseEvent.OrientationChange = RMouseEvent_Wrapper.OrientationChange;
RMouseEvent.TouchCancel = RMouseEvent_Wrapper.TouchCancel;
RMouseEvent.ThemeChange = RMouseEvent_Wrapper.ThemeChange;
RMouseEvent.SockClose = RMouseEvent_Wrapper.SockClose;
RMouseEvent.PlatformPanel = RMouseEvent_Wrapper.PlatformPanel;
RMouseEvent.StyleAnimationUpdate = RMouseEvent_Wrapper.StyleAnimationUpdate;
RMouseEvent.ApplicationStateChange = RMouseEvent_Wrapper.ApplicationStateChange;
RMouseEvent.WindowChangeInternal = RMouseEvent_Wrapper.WindowChangeInternal;
RMouseEvent.ScreenChangeInternal = RMouseEvent_Wrapper.ScreenChangeInternal;
RMouseEvent.PlatformSurface = RMouseEvent_Wrapper.PlatformSurface;
RMouseEvent.Pointer = RMouseEvent_Wrapper.Pointer;
RMouseEvent.TabletTrackingChange = RMouseEvent_Wrapper.TabletTrackingChange;
RMouseEvent.User = RMouseEvent_Wrapper.User;
RMouseEvent.MaxUser = RMouseEvent_Wrapper.MaxUser;


      // functions:
      
        // function 
        RMouseEvent.prototype.type = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.spontaneous = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.spontaneous");
          
              return this.__PROXY__.spontaneous(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.isAccepted = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.isAccepted");
          
              return this.__PROXY__.isAccepted(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.accept = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.accept");
          
              return this.__PROXY__.accept(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.ignore = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.ignore");
          
              return this.__PROXY__.ignore(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.isInputEvent = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.isInputEvent");
          
              return this.__PROXY__.isInputEvent(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.isPointerEvent = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.isPointerEvent");
          
              return this.__PROXY__.isPointerEvent(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.isSinglePointEvent = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.isSinglePointEvent");
          
              return this.__PROXY__.isSinglePointEvent(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.setSpontaneous = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.setSpontaneous");
          
              return this.__PROXY__.setSpontaneous(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.modifiers = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.modifiers");
          
              return this.__PROXY__.modifiers(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.setModifiers = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.setModifiers");
          
              return this.__PROXY__.setModifiers(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.timestamp = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.timestamp");
          
              return this.__PROXY__.timestamp(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.setTimestamp = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.setTimestamp");
          
              return this.__PROXY__.setTimestamp(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.pointCount = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.pointCount");
          
              return this.__PROXY__.pointCount(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.point = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.point");
          
              return this.__PROXY__.point(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.pointById = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.pointById");
          
              return this.__PROXY__.pointById(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.allPointsGrabbed = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.allPointsGrabbed");
          
              return this.__PROXY__.allPointsGrabbed(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.allPointsAccepted = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.allPointsAccepted");
          
              return this.__PROXY__.allPointsAccepted(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.setAccepted = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.setAccepted");
          
              return this.__PROXY__.setAccepted(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.exclusiveGrabber = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.exclusiveGrabber");
          
              return this.__PROXY__.exclusiveGrabber(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.setExclusiveGrabber = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.setExclusiveGrabber");
          
              return this.__PROXY__.setExclusiveGrabber(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.clearPassiveGrabbers = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.clearPassiveGrabbers");
          
              return this.__PROXY__.clearPassiveGrabbers(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.addPassiveGrabber = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.addPassiveGrabber");
          
              return this.__PROXY__.addPassiveGrabber(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.removePassiveGrabber = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.removePassiveGrabber");
          
              return this.__PROXY__.removePassiveGrabber(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.position = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.position");
          
              return this.__PROXY__.position(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.scenePosition = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.scenePosition");
          
              return this.__PROXY__.scenePosition(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.globalPosition = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.globalPosition");
          
              return this.__PROXY__.globalPosition(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.isBeginEvent = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.isBeginEvent");
          
              return this.__PROXY__.isBeginEvent(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.isUpdateEvent = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.isUpdateEvent");
          
              return this.__PROXY__.isUpdateEvent(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.isEndEvent = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.isEndEvent");
          
              return this.__PROXY__.isEndEvent(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.exclusivePointGrabber = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.exclusivePointGrabber");
          
              return this.__PROXY__.exclusivePointGrabber(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.setExclusivePointGrabber = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.setExclusivePointGrabber");
          
              return this.__PROXY__.setExclusivePointGrabber(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.clone = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.clone");
          
              return this.__PROXY__.clone(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.pos = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.pos");
          
              return this.__PROXY__.pos(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.button = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.button");
          
              return this.__PROXY__.button(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.buttons = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.buttons");
          
              return this.__PROXY__.buttons(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.source = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.source");
          
              return this.__PROXY__.source(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.flags = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.flags");
          
              return this.__PROXY__.flags(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.getModelPosition = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.getModelPosition");
          
              return this.__PROXY__.getModelPosition(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.setModelPosition = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.setModelPosition");
          
              return this.__PROXY__.setModelPosition(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.getCursorPosition = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.getCursorPosition");
          
              return this.__PROXY__.getCursorPosition(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.setCursorPosition = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.setCursorPosition");
          
              return this.__PROXY__.setCursorPosition(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.getScreenPosition = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.getScreenPosition");
          
              return this.__PROXY__.getScreenPosition(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.setScreenPosition = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.setScreenPosition");
          
              return this.__PROXY__.setScreenPosition(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.getGraphicsView = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.getGraphicsView");
          
              return this.__PROXY__.getGraphicsView(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.getGraphicsScene = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.getGraphicsScene");
          
              return this.__PROXY__.getGraphicsScene(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.isValid = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.hasMouseMoved = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.hasMouseMoved");
          
              return this.__PROXY__.hasMouseMoved(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.resetOriginalMousePos = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.resetOriginalMousePos");
          
              return this.__PROXY__.resetOriginalMousePos(...args);
            
        };
    
        // function 
        RMouseEvent.prototype.setOriginalMousePos = function(...args) 
          
        {
          //print("JS: RMouseEvent.prototype.setOriginalMousePos");
          
              return this.__PROXY__.setOriginalMousePos(...args);
            
        };
    

      // static functions:
      

        // static function 
        RMouseEvent.hasMouseMoved = function() 
          
        {
          //print("JS: RMouseEvent.hasMouseMoved");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMouseEvent_WrapperSingletonInstance.hasMouseMoved(
                  
                );
              

        //copyProperties(this, wrapper, RMouseEvent);
  }

  
  else {
    
        print("RMouseEvent.hasMouseMoved(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMouseEvent.resetOriginalMousePos = function() 
          
        {
          //print("JS: RMouseEvent.resetOriginalMousePos");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMouseEvent_WrapperSingletonInstance.resetOriginalMousePos(
                  
                );
              

        //copyProperties(this, wrapper, RMouseEvent);
  }

  
  else {
    
        print("RMouseEvent.resetOriginalMousePos(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMouseEvent.setOriginalMousePos = function() 
          
        {
          //print("JS: RMouseEvent.setOriginalMousePos");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMouseEvent_WrapperSingletonInstance.setOriginalMousePos(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMouseEvent);
  }

  
  else {
    
        print("RMouseEvent.setOriginalMousePos(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      RMouseEvent.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RMouseEvent.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RMouseEvent.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMouseEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMouseEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RMouseEvent.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      