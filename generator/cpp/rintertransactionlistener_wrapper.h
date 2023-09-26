
  // Auto generated
  
    #ifndef RINTERTRANSACTIONLISTENER_H_WRAPPER
    #define RINTERTRANSACTIONLISTENER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocument.h"
      
        #include "REntity.h"
      
        #include "RTransaction.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RInterTransactionListener.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RInterTransactionListener
    class RInterTransactionListener_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RInterTransactionListener_Wrapper(const RInterTransactionListener_Wrapper&);

    public:
      // initialization of RInterTransactionListener:
      static void init(RJSApi& handler);

      
        static RInterTransactionListener* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_RInterTransactionListener.length(); i++) {
            RJSBasecaster_RInterTransactionListener* basecaster = basecasters_RInterTransactionListener[i];
            RInterTransactionListener* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_RInterTransactionListener::getIdStatic()) {
            return (RInterTransactionListener*)vp;
          }

          qWarning() << "RInterTransactionListener_Wrapper::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static RInterTransactionListener* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RInterTransactionListener*: wrapper wraps NULL";
          }

          RInterTransactionListener* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RInterTransactionListener*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RInterTransactionListener_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RInterTransactionListener_Wrapper(RJSApi& h, RInterTransactionListener* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RInterTransactionListener_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: RInterTransactionListener
    // Function: updateInterTransactionListener
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateInterTransactionListener
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
          return RJSType_RInterTransactionListener::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RInterTransactionListener* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RInterTransactionListener* getWrapped() const {
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
        RInterTransactionListener* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RInterTransactionListener*> basecasters_RInterTransactionListener;

      public:
        static void registerBasecaster_RInterTransactionListener(RJSBasecaster_RInterTransactionListener* bc) {
          basecasters_RInterTransactionListener.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RInterTransactionListener_Wrapper*)

    Q_DECLARE_INTERFACE(RInterTransactionListener_Wrapper, "org.qcad.RInterTransactionListener_Wrapper")

  
  #endif
  
