
  // Auto generated
  
    #ifndef RCOORDINATEEVENT_H_WRAPPER
    #define RCOORDINATEEVENT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RGraphicsView.h"
      
        #include "RGraphicsScene.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RCoordinateEvent.h"
      
      // singleton class wrapper for static functions:
      class RCoordinateEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RCoordinateEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RCoordinateEvent
    // Function: registerEventType
    // Source: QEvent
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerEventType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static RCoordinateEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RCoordinateEvent
    class RCoordinateEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RCoordinateEvent_Wrapper(const RCoordinateEvent_Wrapper&);

    public:
      // initialization of RCoordinateEvent:
      static void init(RJSApi& handler);

      
        static RCoordinateEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RCoordinateEvent:
          for (int i=0; i<basecasters_RCoordinateEvent.length(); i++) {
            RJSBasecaster_RCoordinateEvent* basecaster = basecasters_RCoordinateEvent[i];
            RCoordinateEvent* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RCoordinateEvent:
          if (t==RJSType_RCoordinateEvent::getIdStatic()) {
            return (RCoordinateEvent*)vp;
          }

          qWarning() << "RCoordinateEvent_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RCoordinateEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RCoordinateEvent*: wrapper wraps NULL";
          }

          RCoordinateEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RCoordinateEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = RCoordinateEvent::None,
Timer = RCoordinateEvent::Timer,
MouseButtonPress = RCoordinateEvent::MouseButtonPress,
MouseButtonRelease = RCoordinateEvent::MouseButtonRelease,
MouseButtonDblClick = RCoordinateEvent::MouseButtonDblClick,
MouseMove = RCoordinateEvent::MouseMove,
KeyPress = RCoordinateEvent::KeyPress,
KeyRelease = RCoordinateEvent::KeyRelease,
FocusIn = RCoordinateEvent::FocusIn,
FocusOut = RCoordinateEvent::FocusOut,
FocusAboutToChange = RCoordinateEvent::FocusAboutToChange,
Enter = RCoordinateEvent::Enter,
Leave = RCoordinateEvent::Leave,
Paint = RCoordinateEvent::Paint,
Move = RCoordinateEvent::Move,
Resize = RCoordinateEvent::Resize,
Create = RCoordinateEvent::Create,
Destroy = RCoordinateEvent::Destroy,
Show = RCoordinateEvent::Show,
Hide = RCoordinateEvent::Hide,
Close = RCoordinateEvent::Close,
Quit = RCoordinateEvent::Quit,
ParentChange = RCoordinateEvent::ParentChange,
ParentAboutToChange = RCoordinateEvent::ParentAboutToChange,
ThreadChange = RCoordinateEvent::ThreadChange,
WindowActivate = RCoordinateEvent::WindowActivate,
WindowDeactivate = RCoordinateEvent::WindowDeactivate,
ShowToParent = RCoordinateEvent::ShowToParent,
HideToParent = RCoordinateEvent::HideToParent,
Wheel = RCoordinateEvent::Wheel,
WindowTitleChange = RCoordinateEvent::WindowTitleChange,
WindowIconChange = RCoordinateEvent::WindowIconChange,
ApplicationWindowIconChange = RCoordinateEvent::ApplicationWindowIconChange,
ApplicationFontChange = RCoordinateEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = RCoordinateEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = RCoordinateEvent::ApplicationPaletteChange,
PaletteChange = RCoordinateEvent::PaletteChange,
Clipboard = RCoordinateEvent::Clipboard,
Speech = RCoordinateEvent::Speech,
MetaCall = RCoordinateEvent::MetaCall,
SockAct = RCoordinateEvent::SockAct,
WinEventAct = RCoordinateEvent::WinEventAct,
DeferredDelete = RCoordinateEvent::DeferredDelete,
DragEnter = RCoordinateEvent::DragEnter,
DragMove = RCoordinateEvent::DragMove,
DragLeave = RCoordinateEvent::DragLeave,
Drop = RCoordinateEvent::Drop,
DragResponse = RCoordinateEvent::DragResponse,
ChildAdded = RCoordinateEvent::ChildAdded,
ChildPolished = RCoordinateEvent::ChildPolished,
ChildRemoved = RCoordinateEvent::ChildRemoved,
ShowWindowRequest = RCoordinateEvent::ShowWindowRequest,
PolishRequest = RCoordinateEvent::PolishRequest,
Polish = RCoordinateEvent::Polish,
LayoutRequest = RCoordinateEvent::LayoutRequest,
UpdateRequest = RCoordinateEvent::UpdateRequest,
UpdateLater = RCoordinateEvent::UpdateLater,
EmbeddingControl = RCoordinateEvent::EmbeddingControl,
ActivateControl = RCoordinateEvent::ActivateControl,
DeactivateControl = RCoordinateEvent::DeactivateControl,
ContextMenu = RCoordinateEvent::ContextMenu,
InputMethod = RCoordinateEvent::InputMethod,
TabletMove = RCoordinateEvent::TabletMove,
LocaleChange = RCoordinateEvent::LocaleChange,
LanguageChange = RCoordinateEvent::LanguageChange,
LayoutDirectionChange = RCoordinateEvent::LayoutDirectionChange,
Style = RCoordinateEvent::Style,
TabletPress = RCoordinateEvent::TabletPress,
TabletRelease = RCoordinateEvent::TabletRelease,
OkRequest = RCoordinateEvent::OkRequest,
HelpRequest = RCoordinateEvent::HelpRequest,
IconDrag = RCoordinateEvent::IconDrag,
FontChange = RCoordinateEvent::FontChange,
EnabledChange = RCoordinateEvent::EnabledChange,
ActivationChange = RCoordinateEvent::ActivationChange,
StyleChange = RCoordinateEvent::StyleChange,
IconTextChange = RCoordinateEvent::IconTextChange,
ModifiedChange = RCoordinateEvent::ModifiedChange,
MouseTrackingChange = RCoordinateEvent::MouseTrackingChange,
WindowBlocked = RCoordinateEvent::WindowBlocked,
WindowUnblocked = RCoordinateEvent::WindowUnblocked,
WindowStateChange = RCoordinateEvent::WindowStateChange,
ReadOnlyChange = RCoordinateEvent::ReadOnlyChange,
ToolTip = RCoordinateEvent::ToolTip,
WhatsThis = RCoordinateEvent::WhatsThis,
StatusTip = RCoordinateEvent::StatusTip,
ActionChanged = RCoordinateEvent::ActionChanged,
ActionAdded = RCoordinateEvent::ActionAdded,
ActionRemoved = RCoordinateEvent::ActionRemoved,
FileOpen = RCoordinateEvent::FileOpen,
Shortcut = RCoordinateEvent::Shortcut,
ShortcutOverride = RCoordinateEvent::ShortcutOverride,
WhatsThisClicked = RCoordinateEvent::WhatsThisClicked,
ToolBarChange = RCoordinateEvent::ToolBarChange,
ApplicationActivate = RCoordinateEvent::ApplicationActivate,
ApplicationActivated = RCoordinateEvent::ApplicationActivated,
ApplicationDeactivate = RCoordinateEvent::ApplicationDeactivate,
ApplicationDeactivated = RCoordinateEvent::ApplicationDeactivated,
QueryWhatsThis = RCoordinateEvent::QueryWhatsThis,
EnterWhatsThisMode = RCoordinateEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = RCoordinateEvent::LeaveWhatsThisMode,
ZOrderChange = RCoordinateEvent::ZOrderChange,
HoverEnter = RCoordinateEvent::HoverEnter,
HoverLeave = RCoordinateEvent::HoverLeave,
HoverMove = RCoordinateEvent::HoverMove,
AcceptDropsChange = RCoordinateEvent::AcceptDropsChange,
ZeroTimerEvent = RCoordinateEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = RCoordinateEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = RCoordinateEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = RCoordinateEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = RCoordinateEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = RCoordinateEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = RCoordinateEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = RCoordinateEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = RCoordinateEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = RCoordinateEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = RCoordinateEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = RCoordinateEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = RCoordinateEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = RCoordinateEvent::GraphicsSceneDrop,
GraphicsSceneWheel = RCoordinateEvent::GraphicsSceneWheel,
GraphicsSceneLeave = RCoordinateEvent::GraphicsSceneLeave,
KeyboardLayoutChange = RCoordinateEvent::KeyboardLayoutChange,
DynamicPropertyChange = RCoordinateEvent::DynamicPropertyChange,
TabletEnterProximity = RCoordinateEvent::TabletEnterProximity,
TabletLeaveProximity = RCoordinateEvent::TabletLeaveProximity,
NonClientAreaMouseMove = RCoordinateEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = RCoordinateEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = RCoordinateEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = RCoordinateEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = RCoordinateEvent::MacSizeChange,
ContentsRectChange = RCoordinateEvent::ContentsRectChange,
MacGLWindowChange = RCoordinateEvent::MacGLWindowChange,
FutureCallOut = RCoordinateEvent::FutureCallOut,
GraphicsSceneResize = RCoordinateEvent::GraphicsSceneResize,
GraphicsSceneMove = RCoordinateEvent::GraphicsSceneMove,
CursorChange = RCoordinateEvent::CursorChange,
ToolTipChange = RCoordinateEvent::ToolTipChange,
NetworkReplyUpdated = RCoordinateEvent::NetworkReplyUpdated,
GrabMouse = RCoordinateEvent::GrabMouse,
UngrabMouse = RCoordinateEvent::UngrabMouse,
GrabKeyboard = RCoordinateEvent::GrabKeyboard,
UngrabKeyboard = RCoordinateEvent::UngrabKeyboard,
StateMachineSignal = RCoordinateEvent::StateMachineSignal,
StateMachineWrapped = RCoordinateEvent::StateMachineWrapped,
TouchBegin = RCoordinateEvent::TouchBegin,
TouchUpdate = RCoordinateEvent::TouchUpdate,
TouchEnd = RCoordinateEvent::TouchEnd,
NativeGesture = RCoordinateEvent::NativeGesture,
RequestSoftwareInputPanel = RCoordinateEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = RCoordinateEvent::CloseSoftwareInputPanel,
WinIdChange = RCoordinateEvent::WinIdChange,
Gesture = RCoordinateEvent::Gesture,
GestureOverride = RCoordinateEvent::GestureOverride,
ScrollPrepare = RCoordinateEvent::ScrollPrepare,
Scroll = RCoordinateEvent::Scroll,
Expose = RCoordinateEvent::Expose,
InputMethodQuery = RCoordinateEvent::InputMethodQuery,
OrientationChange = RCoordinateEvent::OrientationChange,
TouchCancel = RCoordinateEvent::TouchCancel,
ThemeChange = RCoordinateEvent::ThemeChange,
SockClose = RCoordinateEvent::SockClose,
PlatformPanel = RCoordinateEvent::PlatformPanel,
StyleAnimationUpdate = RCoordinateEvent::StyleAnimationUpdate,
ApplicationStateChange = RCoordinateEvent::ApplicationStateChange,
WindowChangeInternal = RCoordinateEvent::WindowChangeInternal,
ScreenChangeInternal = RCoordinateEvent::ScreenChangeInternal,
PlatformSurface = RCoordinateEvent::PlatformSurface,
Pointer = RCoordinateEvent::Pointer,
TabletTrackingChange = RCoordinateEvent::TabletTrackingChange,
User = RCoordinateEvent::User,
MaxUser = RCoordinateEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RCoordinateEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RCoordinateEvent_Wrapper(RJSApi& h, RCoordinateEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RCoordinateEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RCoordinateEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RCoordinateEvent_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: RCoordinateEvent
    // Function: type
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: RCoordinateEvent
    // Function: spontaneous
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  spontaneous
              (

                
              )
              
                const
              
              ;
            
    // Class: RCoordinateEvent
    // Function: setAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCoordinateEvent
    // Function: isAccepted
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: RCoordinateEvent
    // Function: accept
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  accept
              (

                
              )
              
              ;
            
    // Class: RCoordinateEvent
    // Function: ignore
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignore
              (

                
              )
              
              ;
            
    // Class: RCoordinateEvent
    // Function: isInputEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInputEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: RCoordinateEvent
    // Function: isPointerEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointerEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: RCoordinateEvent
    // Function: isSinglePointEvent
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSinglePointEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: RCoordinateEvent
    // Function: clone
    // Source: QEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clone
              (

                
              )
              
                const
              
              ;
            
    // Class: RCoordinateEvent
    // Function: getModelPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getModelPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: RCoordinateEvent
    // Function: setModelPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setModelPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCoordinateEvent
    // Function: getCursorPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCursorPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: RCoordinateEvent
    // Function: setCursorPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCursorPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCoordinateEvent
    // Function: getScreenPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getScreenPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: RCoordinateEvent
    // Function: setScreenPosition
    // Source: RInputEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setScreenPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCoordinateEvent
    // Function: getGraphicsView
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getGraphicsView
              (

                
              )
              
                const
              
              ;
            
    // Class: RCoordinateEvent
    // Function: getGraphicsScene
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getGraphicsScene
              (

                
              )
              
                const
              
              ;
            
    // Class: RCoordinateEvent
    // Function: isValid
    // Source: RInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isValid
              (

                
              )
              
                const
              
              ;
            
    // Class: RCoordinateEvent
    // Function: setModifiers
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setModifiers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RCoordinateEvent
    // Function: getModifiers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getModifiers
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_RCoordinateEvent::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RCoordinateEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RCoordinateEvent* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        RCoordinateEvent* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RCoordinateEvent*> basecasters_RCoordinateEvent;

      public:
        static void registerBasecaster_RCoordinateEvent(RJSBasecaster_RCoordinateEvent* bc) {
          basecasters_RCoordinateEvent.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RCoordinateEvent_Wrapper*)

    Q_DECLARE_INTERFACE(RCoordinateEvent_Wrapper, "org.qcad.RCoordinateEvent_Wrapper")

  
  #endif
  
