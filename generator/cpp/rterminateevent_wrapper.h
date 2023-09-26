
  // Auto generated
  
    #ifndef RTERMINATEEVENT_H_WRAPPER
    #define RTERMINATEEVENT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RTerminateEvent.h"
      
      // singleton class wrapper for static functions:
      class RTerminateEvent_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RTerminateEvent_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RTerminateEvent
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
          //static RTerminateEvent_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RTerminateEvent
    class RTerminateEvent_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RTerminateEvent_Wrapper(const RTerminateEvent_Wrapper&);

    public:
      // initialization of RTerminateEvent:
      static void init(RJSApi& handler);

      
        static RTerminateEvent* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_RTerminateEvent.length(); i++) {
            RJSBasecaster_RTerminateEvent* basecaster = basecasters_RTerminateEvent[i];
            RTerminateEvent* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_RTerminateEvent::getIdStatic()) {
            return (RTerminateEvent*)vp;
          }

          qWarning() << "RTerminateEvent::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static RTerminateEvent* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RTerminateEvent*: wrapper wraps NULL";
          }

          RTerminateEvent* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RTerminateEvent*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    None = RTerminateEvent::None,
Timer = RTerminateEvent::Timer,
MouseButtonPress = RTerminateEvent::MouseButtonPress,
MouseButtonRelease = RTerminateEvent::MouseButtonRelease,
MouseButtonDblClick = RTerminateEvent::MouseButtonDblClick,
MouseMove = RTerminateEvent::MouseMove,
KeyPress = RTerminateEvent::KeyPress,
KeyRelease = RTerminateEvent::KeyRelease,
FocusIn = RTerminateEvent::FocusIn,
FocusOut = RTerminateEvent::FocusOut,
FocusAboutToChange = RTerminateEvent::FocusAboutToChange,
Enter = RTerminateEvent::Enter,
Leave = RTerminateEvent::Leave,
Paint = RTerminateEvent::Paint,
Move = RTerminateEvent::Move,
Resize = RTerminateEvent::Resize,
Create = RTerminateEvent::Create,
Destroy = RTerminateEvent::Destroy,
Show = RTerminateEvent::Show,
Hide = RTerminateEvent::Hide,
Close = RTerminateEvent::Close,
Quit = RTerminateEvent::Quit,
ParentChange = RTerminateEvent::ParentChange,
ParentAboutToChange = RTerminateEvent::ParentAboutToChange,
ThreadChange = RTerminateEvent::ThreadChange,
WindowActivate = RTerminateEvent::WindowActivate,
WindowDeactivate = RTerminateEvent::WindowDeactivate,
ShowToParent = RTerminateEvent::ShowToParent,
HideToParent = RTerminateEvent::HideToParent,
Wheel = RTerminateEvent::Wheel,
WindowTitleChange = RTerminateEvent::WindowTitleChange,
WindowIconChange = RTerminateEvent::WindowIconChange,
ApplicationWindowIconChange = RTerminateEvent::ApplicationWindowIconChange,
ApplicationFontChange = RTerminateEvent::ApplicationFontChange,
ApplicationLayoutDirectionChange = RTerminateEvent::ApplicationLayoutDirectionChange,
ApplicationPaletteChange = RTerminateEvent::ApplicationPaletteChange,
PaletteChange = RTerminateEvent::PaletteChange,
Clipboard = RTerminateEvent::Clipboard,
Speech = RTerminateEvent::Speech,
MetaCall = RTerminateEvent::MetaCall,
SockAct = RTerminateEvent::SockAct,
WinEventAct = RTerminateEvent::WinEventAct,
DeferredDelete = RTerminateEvent::DeferredDelete,
DragEnter = RTerminateEvent::DragEnter,
DragMove = RTerminateEvent::DragMove,
DragLeave = RTerminateEvent::DragLeave,
Drop = RTerminateEvent::Drop,
DragResponse = RTerminateEvent::DragResponse,
ChildAdded = RTerminateEvent::ChildAdded,
ChildPolished = RTerminateEvent::ChildPolished,
ChildRemoved = RTerminateEvent::ChildRemoved,
ShowWindowRequest = RTerminateEvent::ShowWindowRequest,
PolishRequest = RTerminateEvent::PolishRequest,
Polish = RTerminateEvent::Polish,
LayoutRequest = RTerminateEvent::LayoutRequest,
UpdateRequest = RTerminateEvent::UpdateRequest,
UpdateLater = RTerminateEvent::UpdateLater,
EmbeddingControl = RTerminateEvent::EmbeddingControl,
ActivateControl = RTerminateEvent::ActivateControl,
DeactivateControl = RTerminateEvent::DeactivateControl,
ContextMenu = RTerminateEvent::ContextMenu,
InputMethod = RTerminateEvent::InputMethod,
TabletMove = RTerminateEvent::TabletMove,
LocaleChange = RTerminateEvent::LocaleChange,
LanguageChange = RTerminateEvent::LanguageChange,
LayoutDirectionChange = RTerminateEvent::LayoutDirectionChange,
Style = RTerminateEvent::Style,
TabletPress = RTerminateEvent::TabletPress,
TabletRelease = RTerminateEvent::TabletRelease,
OkRequest = RTerminateEvent::OkRequest,
HelpRequest = RTerminateEvent::HelpRequest,
IconDrag = RTerminateEvent::IconDrag,
FontChange = RTerminateEvent::FontChange,
EnabledChange = RTerminateEvent::EnabledChange,
ActivationChange = RTerminateEvent::ActivationChange,
StyleChange = RTerminateEvent::StyleChange,
IconTextChange = RTerminateEvent::IconTextChange,
ModifiedChange = RTerminateEvent::ModifiedChange,
MouseTrackingChange = RTerminateEvent::MouseTrackingChange,
WindowBlocked = RTerminateEvent::WindowBlocked,
WindowUnblocked = RTerminateEvent::WindowUnblocked,
WindowStateChange = RTerminateEvent::WindowStateChange,
ReadOnlyChange = RTerminateEvent::ReadOnlyChange,
ToolTip = RTerminateEvent::ToolTip,
WhatsThis = RTerminateEvent::WhatsThis,
StatusTip = RTerminateEvent::StatusTip,
ActionChanged = RTerminateEvent::ActionChanged,
ActionAdded = RTerminateEvent::ActionAdded,
ActionRemoved = RTerminateEvent::ActionRemoved,
FileOpen = RTerminateEvent::FileOpen,
Shortcut = RTerminateEvent::Shortcut,
ShortcutOverride = RTerminateEvent::ShortcutOverride,
WhatsThisClicked = RTerminateEvent::WhatsThisClicked,
ToolBarChange = RTerminateEvent::ToolBarChange,
ApplicationActivate = RTerminateEvent::ApplicationActivate,
ApplicationActivated = RTerminateEvent::ApplicationActivated,
ApplicationDeactivate = RTerminateEvent::ApplicationDeactivate,
ApplicationDeactivated = RTerminateEvent::ApplicationDeactivated,
QueryWhatsThis = RTerminateEvent::QueryWhatsThis,
EnterWhatsThisMode = RTerminateEvent::EnterWhatsThisMode,
LeaveWhatsThisMode = RTerminateEvent::LeaveWhatsThisMode,
ZOrderChange = RTerminateEvent::ZOrderChange,
HoverEnter = RTerminateEvent::HoverEnter,
HoverLeave = RTerminateEvent::HoverLeave,
HoverMove = RTerminateEvent::HoverMove,
AcceptDropsChange = RTerminateEvent::AcceptDropsChange,
ZeroTimerEvent = RTerminateEvent::ZeroTimerEvent,
GraphicsSceneMouseMove = RTerminateEvent::GraphicsSceneMouseMove,
GraphicsSceneMousePress = RTerminateEvent::GraphicsSceneMousePress,
GraphicsSceneMouseRelease = RTerminateEvent::GraphicsSceneMouseRelease,
GraphicsSceneMouseDoubleClick = RTerminateEvent::GraphicsSceneMouseDoubleClick,
GraphicsSceneContextMenu = RTerminateEvent::GraphicsSceneContextMenu,
GraphicsSceneHoverEnter = RTerminateEvent::GraphicsSceneHoverEnter,
GraphicsSceneHoverMove = RTerminateEvent::GraphicsSceneHoverMove,
GraphicsSceneHoverLeave = RTerminateEvent::GraphicsSceneHoverLeave,
GraphicsSceneHelp = RTerminateEvent::GraphicsSceneHelp,
GraphicsSceneDragEnter = RTerminateEvent::GraphicsSceneDragEnter,
GraphicsSceneDragMove = RTerminateEvent::GraphicsSceneDragMove,
GraphicsSceneDragLeave = RTerminateEvent::GraphicsSceneDragLeave,
GraphicsSceneDrop = RTerminateEvent::GraphicsSceneDrop,
GraphicsSceneWheel = RTerminateEvent::GraphicsSceneWheel,
GraphicsSceneLeave = RTerminateEvent::GraphicsSceneLeave,
KeyboardLayoutChange = RTerminateEvent::KeyboardLayoutChange,
DynamicPropertyChange = RTerminateEvent::DynamicPropertyChange,
TabletEnterProximity = RTerminateEvent::TabletEnterProximity,
TabletLeaveProximity = RTerminateEvent::TabletLeaveProximity,
NonClientAreaMouseMove = RTerminateEvent::NonClientAreaMouseMove,
NonClientAreaMouseButtonPress = RTerminateEvent::NonClientAreaMouseButtonPress,
NonClientAreaMouseButtonRelease = RTerminateEvent::NonClientAreaMouseButtonRelease,
NonClientAreaMouseButtonDblClick = RTerminateEvent::NonClientAreaMouseButtonDblClick,
MacSizeChange = RTerminateEvent::MacSizeChange,
ContentsRectChange = RTerminateEvent::ContentsRectChange,
MacGLWindowChange = RTerminateEvent::MacGLWindowChange,
FutureCallOut = RTerminateEvent::FutureCallOut,
GraphicsSceneResize = RTerminateEvent::GraphicsSceneResize,
GraphicsSceneMove = RTerminateEvent::GraphicsSceneMove,
CursorChange = RTerminateEvent::CursorChange,
ToolTipChange = RTerminateEvent::ToolTipChange,
NetworkReplyUpdated = RTerminateEvent::NetworkReplyUpdated,
GrabMouse = RTerminateEvent::GrabMouse,
UngrabMouse = RTerminateEvent::UngrabMouse,
GrabKeyboard = RTerminateEvent::GrabKeyboard,
UngrabKeyboard = RTerminateEvent::UngrabKeyboard,
StateMachineSignal = RTerminateEvent::StateMachineSignal,
StateMachineWrapped = RTerminateEvent::StateMachineWrapped,
TouchBegin = RTerminateEvent::TouchBegin,
TouchUpdate = RTerminateEvent::TouchUpdate,
TouchEnd = RTerminateEvent::TouchEnd,
NativeGesture = RTerminateEvent::NativeGesture,
RequestSoftwareInputPanel = RTerminateEvent::RequestSoftwareInputPanel,
CloseSoftwareInputPanel = RTerminateEvent::CloseSoftwareInputPanel,
WinIdChange = RTerminateEvent::WinIdChange,
Gesture = RTerminateEvent::Gesture,
GestureOverride = RTerminateEvent::GestureOverride,
ScrollPrepare = RTerminateEvent::ScrollPrepare,
Scroll = RTerminateEvent::Scroll,
Expose = RTerminateEvent::Expose,
InputMethodQuery = RTerminateEvent::InputMethodQuery,
OrientationChange = RTerminateEvent::OrientationChange,
TouchCancel = RTerminateEvent::TouchCancel,
ThemeChange = RTerminateEvent::ThemeChange,
SockClose = RTerminateEvent::SockClose,
PlatformPanel = RTerminateEvent::PlatformPanel,
StyleAnimationUpdate = RTerminateEvent::StyleAnimationUpdate,
ApplicationStateChange = RTerminateEvent::ApplicationStateChange,
WindowChangeInternal = RTerminateEvent::WindowChangeInternal,
ScreenChangeInternal = RTerminateEvent::ScreenChangeInternal,
PlatformSurface = RTerminateEvent::PlatformSurface,
Pointer = RTerminateEvent::Pointer,
TabletTrackingChange = RTerminateEvent::TabletTrackingChange,
User = RTerminateEvent::User,
MaxUser = RTerminateEvent::MaxUser,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RTerminateEvent_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RTerminateEvent_Wrapper(RJSApi& h, RTerminateEvent* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RTerminateEvent_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RTerminateEvent
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RTerminateEvent_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: RTerminateEvent
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
            
    // Class: RTerminateEvent
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
            
    // Class: RTerminateEvent
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
            
    // Class: RTerminateEvent
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
            
    // Class: RTerminateEvent
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
            
    // Class: RTerminateEvent
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
            
    // Class: RTerminateEvent
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
            
    // Class: RTerminateEvent
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
            
    // Class: RTerminateEvent
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
            
    // Class: RTerminateEvent
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
          return RJSType_RTerminateEvent::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RTerminateEvent* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RTerminateEvent* getWrapped() const {
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
        RTerminateEvent* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RTerminateEvent*> basecasters_RTerminateEvent;

      public:
        static void registerBasecaster_RTerminateEvent(RJSBasecaster_RTerminateEvent* bc) {
          basecasters_RTerminateEvent.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RTerminateEvent_Wrapper*)

    Q_DECLARE_INTERFACE(RTerminateEvent_Wrapper, "org.qcad.RTerminateEvent_Wrapper")

  
  #endif
  
