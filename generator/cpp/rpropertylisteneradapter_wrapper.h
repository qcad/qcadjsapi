
  // Auto generated
  
    #ifndef RPROPERTYLISTENERADAPTER_H_WRAPPER
    #define RPROPERTYLISTENERADAPTER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocumentInterface.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RPropertyListenerAdapter.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RPropertyListenerAdapter
    class RPropertyListenerAdapter_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RPropertyListenerAdapter_Wrapper(const RPropertyListenerAdapter_Wrapper&);

    public:
      // initialization of RPropertyListenerAdapter:
      static void init(RJSApi& handler);

      
        static RPropertyListenerAdapter* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          

          // pointer to desired type:
          if (t==RJSType_RPropertyListenerAdapter::getIdStatic()) {
            return (RPropertyListenerAdapter*)vp;
          }

          return nullptr;
          
        }

        static RPropertyListenerAdapter* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RPropertyListenerAdapter*: wrapper wraps NULL";
          }

          RPropertyListenerAdapter* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RPropertyListenerAdapter*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RPropertyListenerAdapter_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RPropertyListenerAdapter_Wrapper(RJSApi& h, RPropertyListenerAdapter* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RPropertyListenerAdapter_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: RPropertyListenerAdapter
    // Function: updatedFromDocument
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void updatedFromDocument(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void updatedFromDocumentEmitter(
                RDocument* document, bool onlyChanges, RS::EntityType entityTypeFilter, bool manual, bool showOnRequest
              );
            
    // Class: RPropertyListenerAdapter
    // Function: updatedFromObject
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void updatedFromObject(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void updatedFromObjectEmitter(
                RObject* object, RDocument* document
              );
            
    // Class: RPropertyListenerAdapter
    // Function: clearedEditor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void clearedEditor(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void clearedEditorEmitter(
                
              );
            
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
          return RJSType_RPropertyListenerAdapter::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RPropertyListenerAdapter* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RPropertyListenerAdapter* getWrapped() const {
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
        RPropertyListenerAdapter* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(RPropertyListenerAdapter_Wrapper*)

    Q_DECLARE_INTERFACE(RPropertyListenerAdapter_Wrapper, "org.qcad.RPropertyListenerAdapter_Wrapper")

  
  #endif
  