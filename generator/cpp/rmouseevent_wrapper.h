
  // Auto generated
  
    #ifndef RMOUSEEVENT_H_WRAPPER
    #define RMOUSEEVENT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RGraphicsScene.h"
      
        #include "RGraphicsView.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RMouseEvent.h"
      
      // singleton class wrapper for static functions:
      class QCADJSAPI_EXPORT 
     RMouseEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RMouseEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
    // Function: hasMouseMoved
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasMouseMoved
              (

                
              )
              
              ;
            
    // Class: RMouseEvent
    // Function: resetOriginalMousePos
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resetOriginalMousePos
              (

                
              )
              
              ;
            
    // Class: RMouseEvent
    // Function: setOriginalMousePos
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOriginalMousePos
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static RMouseEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RMouseEvent
    class QCADJSAPI_EXPORT 
     RMouseEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RMouseEvent_Wrapper(const RMouseEvent_Wrapper&);

    public:
      // initialization of RMouseEvent:
      static void init(RJSApi& handler);

      
        static RMouseEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RMouseEvent:
          for (int i=0; i<basecasters_RMouseEvent.length(); i++) {
            RJSBasecaster_RMouseEvent* basecaster = basecasters_RMouseEvent[i];
            RMouseEvent* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RMouseEvent:
          if (t==RJSType_RMouseEvent::getIdStatic()) {
            return (RMouseEvent*)vp;
          }

          qWarning() << "RMouseEvent_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RMouseEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RMouseEvent*: wrapper wraps NULL";
          }

          RMouseEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RMouseEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = RMouseEvent::None,
Timer = RMouseEvent::Timer,
MouseButtonPress = RMouseEvent::MouseButtonPress,
MouseButtonRelease = RMouseEvent::MouseButtonRelease,
MouseButtonDblClick = RMouseEvent::MouseButtonDblClick,
MouseMove = RMouseEvent::MouseMove,
KeyPress = RMouseEvent::KeyPress,
KeyRelease = RMouseEvent::KeyRelease,
FocusIn = RMouseEvent::FocusIn,
FocusOut = RMouseEvent::FocusOut,
FocusAboutToChange = RMouseEvent::FocusAboutToChange,
Enter = RMouseEvent::Enter,
Leave = RMouseEvent::Leave,
Paint = RMouseEvent::Paint,
Move = RMouseEvent::Move,
Resize = RMouseEvent::Resize,
Create = RMouseEvent::Create,
Destroy = RMouseEvent::Destroy,
Show = RMouseEvent::Show,
Hide = RMouseEvent::Hide,
Close = RMouseEvent::Close,
Quit = RMouseEvent::Quit,
ParentChange = RMouseEvent::ParentChange,
ParentAboutToChange = RMouseEvent::ParentAboutToChange,
ThreadChange = RMouseEvent::ThreadChange,
WindowActivate = RMouseEvent::WindowActivate,
WindowDeactivate = RMouseEvent::WindowDeactivate,
ShowToParent = RMouseEvent::ShowToParent,
HideToParent = RMouseEvent::HideToParent,
Wheel = RMouseEvent::Wheel,
WindowTitleChange = RMouseEvent::WindowTitleChange,
WindowIconChange = RMouseEvent::WindowIconChange,
ApplicationWindowIconChange = RMouseEvent::ApplicationWindowIconChange,
ApplicationFontChange = RMouseEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = RMouseEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = RMouseEvent::ApplicationPaletteChange,
PaletteChange = RMouseEvent::PaletteChange,
Clipboard = RMouseEvent::Clipboard,
Speech = RMouseEvent::Speech,
MetaCall = RMouseEvent::MetaCall,
SockAct = RMouseEvent::SockAct,
WinEventAct = RMouseEvent::WinEventAct,
DeferredDelete = RMouseEvent::DeferredDelete,
DragEnter = RMouseEvent::DragEnter,
DragMove = RMouseEvent::DragMove,
DragLeave = RMouseEvent::DragLeave,
Drop = RMouseEvent::Drop,
DragResponse = RMouseEvent::DragResponse,
ChildAdded = RMouseEvent::ChildAdded,
ChildPolished = RMouseEvent::ChildPolished,
ChildRemoved = RMouseEvent::ChildRemoved,
ShowWindowRequest = RMouseEvent::ShowWindowRequest,
PolishRequest = RMouseEvent::PolishRequest,
Polish = RMouseEvent::Polish,
LayoutRequest = RMouseEvent::LayoutRequest,
UpdateRequest = RMouseEvent::UpdateRequest,
UpdateLater = RMouseEvent::UpdateLater,
EmbeddingControl = RMouseEvent::EmbeddingControl,
ActivateControl = RMouseEvent::ActivateControl,
DeactivateControl = RMouseEvent::DeactivateControl,
ContextMenu = RMouseEvent::ContextMenu,
InputMethod = RMouseEvent::InputMethod,
TabletMove = RMouseEvent::TabletMove,
LocaleChange = RMouseEvent::LocaleChange,
LanguageChange = RMouseEvent::LanguageChange,
LayoutDirectionChange = RMouseEvent::LayoutDirectionChange,
Style = RMouseEvent::Style,
TabletPress = RMouseEvent::TabletPress,
TabletRelease = RMouseEvent::TabletRelease,
OkRequest = RMouseEvent::OkRequest,
HelpRequest = RMouseEvent::HelpRequest,
IconDrag = RMouseEvent::IconDrag,
FontChange = RMouseEvent::FontChange,
EnabledChange = RMouseEvent::EnabledChange,
ActivationChange = RMouseEvent::ActivationChange,
StyleChange = RMouseEvent::StyleChange,
IconTextChange = RMouseEvent::IconTextChange,
ModifiedChange = RMouseEvent::ModifiedChange,
MouseTrackingChange = RMouseEvent::MouseTrackingChange,
WindowBlocked = RMouseEvent::WindowBlocked,
WindowUnblocked = RMouseEvent::WindowUnblocked,
WindowStateChange = RMouseEvent::WindowStateChange,
ReadOnlyChange = RMouseEvent::ReadOnlyChange,
ToolTip = RMouseEvent::ToolTip,
WhatsThis = RMouseEvent::WhatsThis,
StatusTip = RMouseEvent::StatusTip,
ActionChanged = RMouseEvent::ActionChanged,
ActionAdded = RMouseEvent::ActionAdded,
ActionRemoved = RMouseEvent::ActionRemoved,
FileOpen = RMouseEvent::FileOpen,
Shortcut = RMouseEvent::Shortcut,
ShortcutOverride = RMouseEvent::ShortcutOverride,
WhatsThisClicked = RMouseEvent::WhatsThisClicked,
ToolBarChange = RMouseEvent::ToolBarChange,
ApplicationActivate = RMouseEvent::ApplicationActivate,
ApplicationActivated = RMouseEvent::ApplicationActivated,
ApplicationDeactivate = RMouseEvent::ApplicationDeactivate,
ApplicationDeactivated = RMouseEvent::ApplicationDeactivated,
QueryWhatsThis = RMouseEvent::QueryWhatsThis,
EnterWhatsThisMode = RMouseEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = RMouseEvent::LeaveWhatsThisMode,
ZOrderChange = RMouseEvent::ZOrderChange,
HoverEnter = RMouseEvent::HoverEnter,
HoverLeave = RMouseEvent::HoverLeave,
HoverMove = RMouseEvent::HoverMove,
AcceptDropsChange = RMouseEvent::AcceptDropsChange,
ZeroTimerEvent = RMouseEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = RMouseEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = RMouseEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = RMouseEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = RMouseEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = RMouseEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = RMouseEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = RMouseEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = RMouseEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = RMouseEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = RMouseEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = RMouseEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = RMouseEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = RMouseEvent::GraphicsSceneDrop,
GraphicsSceneWheel = RMouseEvent::GraphicsSceneWheel,
GraphicsSceneLeave = RMouseEvent::GraphicsSceneLeave,
KeyboardLayoutChange = RMouseEvent::KeyboardLayoutChange,
DynamicPropertyChange = RMouseEvent::DynamicPropertyChange,
TabletEnterProximity = RMouseEvent::TabletEnterProximity,
TabletLeaveProximity = RMouseEvent::TabletLeaveProximity,
NonClientAreaMouseMove = RMouseEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = RMouseEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = RMouseEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = RMouseEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = RMouseEvent::MacSizeChange,
ContentsRectChange = RMouseEvent::ContentsRectChange,
MacGLWindowChange = RMouseEvent::MacGLWindowChange,
FutureCallOut = RMouseEvent::FutureCallOut,
GraphicsSceneResize = RMouseEvent::GraphicsSceneResize,
GraphicsSceneMove = RMouseEvent::GraphicsSceneMove,
CursorChange = RMouseEvent::CursorChange,
ToolTipChange = RMouseEvent::ToolTipChange,
NetworkReplyUpdated = RMouseEvent::NetworkReplyUpdated,
GrabMouse = RMouseEvent::GrabMouse,
UngrabMouse = RMouseEvent::UngrabMouse,
GrabKeyboard = RMouseEvent::GrabKeyboard,
UngrabKeyboard = RMouseEvent::UngrabKeyboard,
StateMachineSignal = RMouseEvent::StateMachineSignal,
StateMachineWrapped = RMouseEvent::StateMachineWrapped,
TouchBegin = RMouseEvent::TouchBegin,
TouchUpdate = RMouseEvent::TouchUpdate,
TouchEnd = RMouseEvent::TouchEnd,
NativeGesture = RMouseEvent::NativeGesture,
RequestSoftwareInputPanel = RMouseEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = RMouseEvent::CloseSoftwareInputPanel,
WinIdChange = RMouseEvent::WinIdChange,
Gesture = RMouseEvent::Gesture,
GestureOverride = RMouseEvent::GestureOverride,
ScrollPrepare = RMouseEvent::ScrollPrepare,
Scroll = RMouseEvent::Scroll,
Expose = RMouseEvent::Expose,
InputMethodQuery = RMouseEvent::InputMethodQuery,
OrientationChange = RMouseEvent::OrientationChange,
TouchCancel = RMouseEvent::TouchCancel,
ThemeChange = RMouseEvent::ThemeChange,
SockClose = RMouseEvent::SockClose,
PlatformPanel = RMouseEvent::PlatformPanel,
StyleAnimationUpdate = RMouseEvent::StyleAnimationUpdate,
ApplicationStateChange = RMouseEvent::ApplicationStateChange,
WindowChangeInternal = RMouseEvent::WindowChangeInternal,
ScreenChangeInternal = RMouseEvent::ScreenChangeInternal,
PlatformSurface = RMouseEvent::PlatformSurface,
Pointer = RMouseEvent::Pointer,
TabletTrackingChange = RMouseEvent::TabletTrackingChange,
User = RMouseEvent::User,
MaxUser = RMouseEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RMouseEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RMouseEvent_Wrapper(RJSApi& h, RMouseEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RMouseEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RMouseEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 7
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RMouseEvent_Wrapper
                
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
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    , 
  const QJSValue& 
  a6
      = QJSValue()
    , 
  const QJSValue& 
  a7
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
    // Function: modifiers
    // Source: QInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  modifiers
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: setModifiers
    // Source: QInputEvent
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
            
    // Class: RMouseEvent
    // Function: timestamp
    // Source: QInputEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  timestamp
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: setTimestamp
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTimestamp
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RMouseEvent
    // Function: pointCount
    // Source: QPointerEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pointCount
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: point
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  point
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RMouseEvent
    // Function: pointById
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pointById
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RMouseEvent
    // Function: allPointsGrabbed
    // Source: QPointerEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  allPointsGrabbed
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: allPointsAccepted
    // Source: QPointerEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  allPointsAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: setAccepted
    // Source: QPointerEvent
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
            
    // Class: RMouseEvent
    // Function: exclusiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exclusiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: setExclusiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExclusiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RMouseEvent
    // Function: clearPassiveGrabbers
    // Source: QPointerEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearPassiveGrabbers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RMouseEvent
    // Function: addPassiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addPassiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RMouseEvent
    // Function: removePassiveGrabber
    // Source: QPointerEvent
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removePassiveGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RMouseEvent
    // Function: position
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  position
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: scenePosition
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scenePosition
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: globalPosition
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  globalPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: isBeginEvent
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBeginEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: isUpdateEvent
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUpdateEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: isEndEvent
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEndEvent
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: exclusivePointGrabber
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exclusivePointGrabber
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: setExclusivePointGrabber
    // Source: QSinglePointEvent
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExclusivePointGrabber
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RMouseEvent
    // Function: clone
    // Source: QSinglePointEvent
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
            
    // Class: RMouseEvent
    // Function: pos
    // Source: QMouseEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pos
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: button
    // Source: QMouseEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  button
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: buttons
    // Source: QMouseEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  buttons
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: source
    // Source: QMouseEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  source
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
    // Function: flags
    // Source: QMouseEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flags
              (

                
              )
              
                const
              
              ;
            
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
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
            
    // Class: RMouseEvent
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
          return RJSType_RMouseEvent::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RMouseEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RMouseEvent* getWrapped() const {
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
        RMouseEvent* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RMouseEvent*> basecasters_RMouseEvent;

      public:
        static void registerBasecaster_RMouseEvent(RJSBasecaster_RMouseEvent* bc) {
          basecasters_RMouseEvent.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RMouseEvent_Wrapper*)

    Q_DECLARE_INTERFACE(RMouseEvent_Wrapper, "org.qcad.RMouseEvent_Wrapper")

  
  #endif
  
