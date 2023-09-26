
  // Auto generated
  
    #ifndef RWHEELEVENT_H_WRAPPER
    #define RWHEELEVENT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RGraphicsView.h"
      
        #include "RGraphicsScene.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RWheelEvent.h"
      
      // singleton class wrapper for static functions:
      class RWheelEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RWheelEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RWheelEvent
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
          //static RWheelEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RWheelEvent
    class RWheelEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     pixelDelta READ pixelDelta
  )

  Q_PROPERTY(
    
    QJSValue
     angleDelta READ angleDelta
  )

  Q_PROPERTY(
    
    QJSValue
     phase READ phase
  )

  Q_PROPERTY(
    
    QJSValue
     inverted READ inverted
  )


    private:
      // disable copy constructor:
      RWheelEvent_Wrapper(const RWheelEvent_Wrapper&);

    public:
      // initialization of RWheelEvent:
      static void init(RJSApi& handler);

      
        static RWheelEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_RWheelEvent.length(); i++) {
            RJSBasecaster_RWheelEvent* basecaster = basecasters_RWheelEvent[i];
            RWheelEvent* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_RWheelEvent::getIdStatic()) {
            return (RWheelEvent*)vp;
          }

          qWarning() << "RWheelEvent_Wrapper::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static RWheelEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RWheelEvent*: wrapper wraps NULL";
          }

          RWheelEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RWheelEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = RWheelEvent::None,
Timer = RWheelEvent::Timer,
MouseButtonPress = RWheelEvent::MouseButtonPress,
MouseButtonRelease = RWheelEvent::MouseButtonRelease,
MouseButtonDblClick = RWheelEvent::MouseButtonDblClick,
MouseMove = RWheelEvent::MouseMove,
KeyPress = RWheelEvent::KeyPress,
KeyRelease = RWheelEvent::KeyRelease,
FocusIn = RWheelEvent::FocusIn,
FocusOut = RWheelEvent::FocusOut,
FocusAboutToChange = RWheelEvent::FocusAboutToChange,
Enter = RWheelEvent::Enter,
Leave = RWheelEvent::Leave,
Paint = RWheelEvent::Paint,
Move = RWheelEvent::Move,
Resize = RWheelEvent::Resize,
Create = RWheelEvent::Create,
Destroy = RWheelEvent::Destroy,
Show = RWheelEvent::Show,
Hide = RWheelEvent::Hide,
Close = RWheelEvent::Close,
Quit = RWheelEvent::Quit,
ParentChange = RWheelEvent::ParentChange,
ParentAboutToChange = RWheelEvent::ParentAboutToChange,
ThreadChange = RWheelEvent::ThreadChange,
WindowActivate = RWheelEvent::WindowActivate,
WindowDeactivate = RWheelEvent::WindowDeactivate,
ShowToParent = RWheelEvent::ShowToParent,
HideToParent = RWheelEvent::HideToParent,
Wheel = RWheelEvent::Wheel,
WindowTitleChange = RWheelEvent::WindowTitleChange,
WindowIconChange = RWheelEvent::WindowIconChange,
ApplicationWindowIconChange = RWheelEvent::ApplicationWindowIconChange,
ApplicationFontChange = RWheelEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = RWheelEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = RWheelEvent::ApplicationPaletteChange,
PaletteChange = RWheelEvent::PaletteChange,
Clipboard = RWheelEvent::Clipboard,
Speech = RWheelEvent::Speech,
MetaCall = RWheelEvent::MetaCall,
SockAct = RWheelEvent::SockAct,
WinEventAct = RWheelEvent::WinEventAct,
DeferredDelete = RWheelEvent::DeferredDelete,
DragEnter = RWheelEvent::DragEnter,
DragMove = RWheelEvent::DragMove,
DragLeave = RWheelEvent::DragLeave,
Drop = RWheelEvent::Drop,
DragResponse = RWheelEvent::DragResponse,
ChildAdded = RWheelEvent::ChildAdded,
ChildPolished = RWheelEvent::ChildPolished,
ChildRemoved = RWheelEvent::ChildRemoved,
ShowWindowRequest = RWheelEvent::ShowWindowRequest,
PolishRequest = RWheelEvent::PolishRequest,
Polish = RWheelEvent::Polish,
LayoutRequest = RWheelEvent::LayoutRequest,
UpdateRequest = RWheelEvent::UpdateRequest,
UpdateLater = RWheelEvent::UpdateLater,
EmbeddingControl = RWheelEvent::EmbeddingControl,
ActivateControl = RWheelEvent::ActivateControl,
DeactivateControl = RWheelEvent::DeactivateControl,
ContextMenu = RWheelEvent::ContextMenu,
InputMethod = RWheelEvent::InputMethod,
TabletMove = RWheelEvent::TabletMove,
LocaleChange = RWheelEvent::LocaleChange,
LanguageChange = RWheelEvent::LanguageChange,
LayoutDirectionChange = RWheelEvent::LayoutDirectionChange,
Style = RWheelEvent::Style,
TabletPress = RWheelEvent::TabletPress,
TabletRelease = RWheelEvent::TabletRelease,
OkRequest = RWheelEvent::OkRequest,
HelpRequest = RWheelEvent::HelpRequest,
IconDrag = RWheelEvent::IconDrag,
FontChange = RWheelEvent::FontChange,
EnabledChange = RWheelEvent::EnabledChange,
ActivationChange = RWheelEvent::ActivationChange,
StyleChange = RWheelEvent::StyleChange,
IconTextChange = RWheelEvent::IconTextChange,
ModifiedChange = RWheelEvent::ModifiedChange,
MouseTrackingChange = RWheelEvent::MouseTrackingChange,
WindowBlocked = RWheelEvent::WindowBlocked,
WindowUnblocked = RWheelEvent::WindowUnblocked,
WindowStateChange = RWheelEvent::WindowStateChange,
ReadOnlyChange = RWheelEvent::ReadOnlyChange,
ToolTip = RWheelEvent::ToolTip,
WhatsThis = RWheelEvent::WhatsThis,
StatusTip = RWheelEvent::StatusTip,
ActionChanged = RWheelEvent::ActionChanged,
ActionAdded = RWheelEvent::ActionAdded,
ActionRemoved = RWheelEvent::ActionRemoved,
FileOpen = RWheelEvent::FileOpen,
Shortcut = RWheelEvent::Shortcut,
ShortcutOverride = RWheelEvent::ShortcutOverride,
WhatsThisClicked = RWheelEvent::WhatsThisClicked,
ToolBarChange = RWheelEvent::ToolBarChange,
ApplicationActivate = RWheelEvent::ApplicationActivate,
ApplicationActivated = RWheelEvent::ApplicationActivated,
ApplicationDeactivate = RWheelEvent::ApplicationDeactivate,
ApplicationDeactivated = RWheelEvent::ApplicationDeactivated,
QueryWhatsThis = RWheelEvent::QueryWhatsThis,
EnterWhatsThisMode = RWheelEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = RWheelEvent::LeaveWhatsThisMode,
ZOrderChange = RWheelEvent::ZOrderChange,
HoverEnter = RWheelEvent::HoverEnter,
HoverLeave = RWheelEvent::HoverLeave,
HoverMove = RWheelEvent::HoverMove,
AcceptDropsChange = RWheelEvent::AcceptDropsChange,
ZeroTimerEvent = RWheelEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = RWheelEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = RWheelEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = RWheelEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = RWheelEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = RWheelEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = RWheelEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = RWheelEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = RWheelEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = RWheelEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = RWheelEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = RWheelEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = RWheelEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = RWheelEvent::GraphicsSceneDrop,
GraphicsSceneWheel = RWheelEvent::GraphicsSceneWheel,
GraphicsSceneLeave = RWheelEvent::GraphicsSceneLeave,
KeyboardLayoutChange = RWheelEvent::KeyboardLayoutChange,
DynamicPropertyChange = RWheelEvent::DynamicPropertyChange,
TabletEnterProximity = RWheelEvent::TabletEnterProximity,
TabletLeaveProximity = RWheelEvent::TabletLeaveProximity,
NonClientAreaMouseMove = RWheelEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = RWheelEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = RWheelEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = RWheelEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = RWheelEvent::MacSizeChange,
ContentsRectChange = RWheelEvent::ContentsRectChange,
MacGLWindowChange = RWheelEvent::MacGLWindowChange,
FutureCallOut = RWheelEvent::FutureCallOut,
GraphicsSceneResize = RWheelEvent::GraphicsSceneResize,
GraphicsSceneMove = RWheelEvent::GraphicsSceneMove,
CursorChange = RWheelEvent::CursorChange,
ToolTipChange = RWheelEvent::ToolTipChange,
NetworkReplyUpdated = RWheelEvent::NetworkReplyUpdated,
GrabMouse = RWheelEvent::GrabMouse,
UngrabMouse = RWheelEvent::UngrabMouse,
GrabKeyboard = RWheelEvent::GrabKeyboard,
UngrabKeyboard = RWheelEvent::UngrabKeyboard,
StateMachineSignal = RWheelEvent::StateMachineSignal,
StateMachineWrapped = RWheelEvent::StateMachineWrapped,
TouchBegin = RWheelEvent::TouchBegin,
TouchUpdate = RWheelEvent::TouchUpdate,
TouchEnd = RWheelEvent::TouchEnd,
NativeGesture = RWheelEvent::NativeGesture,
RequestSoftwareInputPanel = RWheelEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = RWheelEvent::CloseSoftwareInputPanel,
WinIdChange = RWheelEvent::WinIdChange,
Gesture = RWheelEvent::Gesture,
GestureOverride = RWheelEvent::GestureOverride,
ScrollPrepare = RWheelEvent::ScrollPrepare,
Scroll = RWheelEvent::Scroll,
Expose = RWheelEvent::Expose,
InputMethodQuery = RWheelEvent::InputMethodQuery,
OrientationChange = RWheelEvent::OrientationChange,
TouchCancel = RWheelEvent::TouchCancel,
ThemeChange = RWheelEvent::ThemeChange,
SockClose = RWheelEvent::SockClose,
PlatformPanel = RWheelEvent::PlatformPanel,
StyleAnimationUpdate = RWheelEvent::StyleAnimationUpdate,
ApplicationStateChange = RWheelEvent::ApplicationStateChange,
WindowChangeInternal = RWheelEvent::WindowChangeInternal,
ScreenChangeInternal = RWheelEvent::ScreenChangeInternal,
PlatformSurface = RWheelEvent::PlatformSurface,
Pointer = RWheelEvent::Pointer,
TabletTrackingChange = RWheelEvent::TabletTrackingChange,
User = RWheelEvent::User,
MaxUser = RWheelEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RWheelEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RWheelEvent_Wrapper(RJSApi& h, RWheelEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RWheelEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RWheelEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 7
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RWheelEvent_Wrapper
                
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
    
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
    // Function: button
    // Source: QSinglePointEvent
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
            
    // Class: RWheelEvent
    // Function: buttons
    // Source: QSinglePointEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
    // Function: clone
    // Source: QWheelEvent
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
            
    // Class: RWheelEvent
    // Function: pixelDelta
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pixelDelta
              (

                
              )
              
                const
              
              ;
            
    // Class: RWheelEvent
    // Function: angleDelta
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  angleDelta
              (

                
              )
              
                const
              
              ;
            
    // Class: RWheelEvent
    // Function: phase
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  phase
              (

                
              )
              
                const
              
              ;
            
    // Class: RWheelEvent
    // Function: inverted
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  inverted
              (

                
              )
              
                const
              
              ;
            
    // Class: RWheelEvent
    // Function: isInverted
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInverted
              (

                
              )
              
                const
              
              ;
            
    // Class: RWheelEvent
    // Function: hasPixelDelta
    // Source: QWheelEvent
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasPixelDelta
              (

                
              )
              
                const
              
              ;
            
    // Class: RWheelEvent
    // Function: isBeginEvent
    // Source: QWheelEvent
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
            
    // Class: RWheelEvent
    // Function: isUpdateEvent
    // Source: QWheelEvent
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
            
    // Class: RWheelEvent
    // Function: isEndEvent
    // Source: QWheelEvent
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
            
    // Class: RWheelEvent
    // Function: source
    // Source: QWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
            
    // Class: RWheelEvent
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
          return RJSType_RWheelEvent::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RWheelEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RWheelEvent* getWrapped() const {
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
        RWheelEvent* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RWheelEvent*> basecasters_RWheelEvent;

      public:
        static void registerBasecaster_RWheelEvent(RJSBasecaster_RWheelEvent* bc) {
          basecasters_RWheelEvent.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RWheelEvent_Wrapper*)

    Q_DECLARE_INTERFACE(RWheelEvent_Wrapper, "org.qcad.RWheelEvent_Wrapper")

  
  #endif
  
