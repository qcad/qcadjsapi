
  // Auto generated
  
    #ifndef RVIEWFOCUSLISTENER_H_WRAPPER
    #define RVIEWFOCUSLISTENER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RGraphicsView.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RViewFocusListener.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RViewFocusListener
    class QCADJSAPI_EXPORT 
     RViewFocusListener_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RViewFocusListener_Wrapper(const RViewFocusListener_Wrapper&);

    public:
      // initialization of RViewFocusListener:
      static void init(RJSApi& handler);

      
        static RViewFocusListener* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RViewFocusListener:
          for (int i=0; i<basecasters_RViewFocusListener.length(); i++) {
            RJSBasecaster_RViewFocusListener* basecaster = basecasters_RViewFocusListener[i];
            RViewFocusListener* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RViewFocusListener:
          if (t==RJSType_RViewFocusListener::getIdStatic()) {
            return (RViewFocusListener*)vp;
          }

          qWarning() << "RViewFocusListener_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RViewFocusListener* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RViewFocusListener*: wrapper wraps NULL";
          }

          RViewFocusListener* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RViewFocusListener*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RViewFocusListener_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RViewFocusListener_Wrapper(RJSApi& h, RViewFocusListener* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RViewFocusListener_Wrapper();
        
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
          return RJSType_RViewFocusListener::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RViewFocusListener* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RViewFocusListener* getWrapped() const {
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
        RViewFocusListener* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RViewFocusListener*> basecasters_RViewFocusListener;

      public:
        static void registerBasecaster_RViewFocusListener(RJSBasecaster_RViewFocusListener* bc) {
          basecasters_RViewFocusListener.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RViewFocusListener_Wrapper*)

    Q_DECLARE_INTERFACE(RViewFocusListener_Wrapper, "org.qcad.RViewFocusListener_Wrapper")

  
  #endif
  
