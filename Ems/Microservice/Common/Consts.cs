using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Microservice.Common
{
    public static class Consts
    {
        public const string DB_DATE_FORMAT = "yyyyMMdd";
        public const string DB_TIME_FORMAT = "HHmmss";
        public const string DB_DATETIME_FORMAT = $"{DB_DATE_FORMAT}{DB_TIME_FORMAT}";
        public const string DATE_FORMAT = "dd-MM-yyyy";

    }
}