
  // Auto generated
  
    #ifndef RPLUGININTERFACE_H_WRAPPER
    #define RPLUGININTERFACE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QString>
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RPluginInterface.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RPluginInterface
    class QCADJSAPI_EXPORT 
     RPluginInterface_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RPluginInterface_Wrapper(const RPluginInterface_Wrapper&);

    public:
      // initialization of RPluginInterface:
      static void init(RJSApi& handler);

      
        static RPluginInterface* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RPluginInterface:
          for (int i=0; i<basecasters_RPluginInterface.length(); i++) {
            RJSBasecaster_RPluginInterface* basecaster = basecasters_RPluginInterface[i];
            RPluginInterface* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RPluginInterface:
          if (t==RJSType_RPluginInterface::getIdStatic()) {
            return (RPluginInterface*)vp;
          }

          qWarning() << "RPluginInterface_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RPluginInterface* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RPluginInterface*: wrapper wraps NULL";
          }

          RPluginInterface* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RPluginInterface*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum InitStatus {
    GotSplashWindow = RPluginInterface::GotSplashWindow,
AddOnsInitialized = RPluginInterface::AddOnsInitialized,
ActionsAdded = RPluginInterface::ActionsAdded,
GotMainWindowBeforeShow = RPluginInterface::GotMainWindowBeforeShow,
GotMainWindow = RPluginInterface::GotMainWindow,
LoadedFiles = RPluginInterface::LoadedFiles,
ScriptsExecuted = RPluginInterface::ScriptsExecuted,
AllDone = RPluginInterface::AllDone,

  };
  Q_ENUM(InitStatus)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RPluginInterface_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RPluginInterface_Wrapper(RJSApi& h, RPluginInterface* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RPluginInterface_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
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
          return RJSType_RPluginInterface::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RPluginInterface* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RPluginInterface* getWrapped() const {
          
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
          RPluginInterface* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RPluginInterface*> basecasters_RPluginInterface;

      public:
        static void registerBasecaster_RPluginInterface(RJSBasecaster_RPluginInterface* bc) {
          basecasters_RPluginInterface.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RPluginInterface_Wrapper*)

    Q_DECLARE_INTERFACE(RPluginInterface_Wrapper, "org.qcad.RPluginInterface_Wrapper")

  
  #endif
  
