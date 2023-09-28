
  // Auto generated
  
    #ifndef RPROPERTYLISTENER_H_WRAPPER
    #define RPROPERTYLISTENER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocument.h"
      
        #include "REntity.h"
      
        #include "RDocument.h"
      
        #include "RObject.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RPropertyListener.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RPropertyListener
    class RPropertyListener_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RPropertyListener_Wrapper(const RPropertyListener_Wrapper&);

    public:
      // initialization of RPropertyListener:
      static void init(RJSApi& handler);

      
        static RPropertyListener* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RPropertyListener:
          for (int i=0; i<basecasters_RPropertyListener.length(); i++) {
            RJSBasecaster_RPropertyListener* basecaster = basecasters_RPropertyListener[i];
            RPropertyListener* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RPropertyListener:
          if (t==RJSType_RPropertyListener::getIdStatic()) {
            return (RPropertyListener*)vp;
          }

          qWarning() << "RPropertyListener_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RPropertyListener* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RPropertyListener*: wrapper wraps NULL";
          }

          RPropertyListener* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RPropertyListener*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RPropertyListener_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RPropertyListener_Wrapper(RJSApi& h, RPropertyListener* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RPropertyListener_Wrapper();
        
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
          return RJSType_RPropertyListener::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RPropertyListener* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RPropertyListener* getWrapped() const {
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
        RPropertyListener* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RPropertyListener*> basecasters_RPropertyListener;

      public:
        static void registerBasecaster_RPropertyListener(RJSBasecaster_RPropertyListener* bc) {
          basecasters_RPropertyListener.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RPropertyListener_Wrapper*)

    Q_DECLARE_INTERFACE(RPropertyListener_Wrapper, "org.qcad.RPropertyListener_Wrapper")

  
  #endif
  
