import { AsnDto } from "./Asn.dto";
import { CurrencyDto } from "./Currency.dto";
import { LanguagesItemDto } from "./LanguagesItem.dto";
import { ThreatDto } from "./Threat.dto";
import { TimeZoneDto } from "./Timezone.dto";

export interface IpLocationDto {
  ip: string;
  is_eu: boolean;
  city: string;
  region: string;
  region_code: string;
  region_type: string;
  country_name: string;
  country_code: string;
  continent_name: string;
  continent_code: string;
  latitude: number;
  longitude: number;
  postal: string;
  calling_code: string;
  flag: string;
  emoji_flag: string;
  emoji_unicode: string;
  asn: AsnDto;
  languages: LanguagesItemDto[];
  currency: CurrencyDto;
  time_zone: TimeZoneDto;
  threat: ThreatDto;
  count: string;
}
