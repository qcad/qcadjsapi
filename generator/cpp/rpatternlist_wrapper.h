
  // Auto generated
  
    #ifndef RPATTERNLIST_H_WRAPPER
    #define RPATTERNLIST_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RPatternList.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RPatternList
    class RPatternList_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RPatternList_Wrapper(const RPatternList_Wrapper&);

    public:
      // initialization of RPatternList:
      static void init(RJSApi& handler);

      
        static RPatternList* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          
            if (t==RJSType_RPatternListImperial::getIdStatic()) {
              return (RPatternList*)(RPatternListImperial*)vp;
            }
            
            if (t==RJSType_RPatternListMetric::getIdStatic()) {
              return (RPatternList*)(RPatternListMetric*)vp;
            }
            

          // pointer to desired type:
          if (t==RJSType_RPatternList::getIdStatic()) {
            return (RPatternList*)vp;
          }

          return nullptr;
          
        }

        static RPatternList* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RPatternList*: wrapper wraps NULL";
          }

          RPatternList* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RPatternList*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RPatternList_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RPatternList_Wrapper(RJSApi& h, RPatternList* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RPatternList_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    

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
          return RJSType_RPatternList::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RPatternList* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RPatternList* getWrapped() const {
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
        RPatternList* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(RPatternList_Wrapper*)

    Q_DECLARE_INTERFACE(RPatternList_Wrapper, "org.qcad.RPatternList_Wrapper")

  
  #endif
  