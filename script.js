
const tabsContainer = document.getElementById('tabs');
const messagesContainer = document.getElementById('messages-container');

// ログフォルダの構造を模擬的に設定（サーバーサイドで取得する場合はAPIと連携）
const channels = {
"000-00a_全体への重要な連絡": [
  "2024-02-24.json",
  "2024-02-25.json",
  "2024-02-26.json",
  "2024-02-27.json",
  "2024-02-28.json",
  "2024-03-03.json",
  "2024-03-07.json",
  "2024-03-13.json",
  "2024-03-14.json",
  "2024-03-16.json",
  "2024-03-18.json",
  "2024-03-25.json",
  "2024-04-02.json",
  "2024-04-04.json",
  "2024-04-07.json",
  "2024-04-09.json",
  "2024-04-13.json",
  "2024-05-11.json",
  "2024-05-12.json",
  "2024-05-14.json",
  "2024-05-20.json",
  "2024-05-24.json",
  "2024-05-26.json",
  "2024-06-20.json",
  "2024-07-24.json",
  "2024-07-30.json",
  "2024-07-31.json",
  "2024-08-05.json",
  "2024-08-11.json",
  "2024-08-15.json",
  "2024-08-20.json",
  "2024-09-06.json",
  "2024-09-10.json",
  "2024-09-11.json",
  "2024-09-26.json",
  "2024-10-04.json",
  "2024-10-07.json",
  "2024-10-11.json",
  "2024-10-20.json",
  "2024-10-22.json",
  "2024-10-23.json",
  "2024-10-30.json",
  "2024-10-31.json",
  "2024-11-01.json",
  "2024-11-04.json",
  "2024-11-05.json",
  "2024-11-07.json",
  "2024-11-08.json",
  "2024-11-10.json",
  "2024-11-12.json",
  "2024-11-17.json",
  "2024-11-18.json",
  "2024-11-28.json",
  "2024-11-30.json",
  "2024-12-01.json",
  "2024-12-05.json",
],
"000-00b_みんなからのお知らせ": [
"1 (1).json",
"1 (2).json",
"1 (3).json",
"1 (4).json",
"1 (5).json	",
"1 (6).json",
"1 (7).json",
"1 (8).json",
"1 (9).json",
"1 (10).json",
"1 (11).json",
"1 (12).json",
"1 (13).json",
"1 (14).json",
"1 (15).json",
"1 (16).json",
"1 (17).json",
"1 (18).json",
"1 (19).json",
"1 (20).json",
"1 (21).json",
"1 (22).json",
"1 (23).json",
"1 (24).json",
"1 (25).json",
"1 (26).json",
"1 (27).json",
"1 (28).json",
"1 (29).json",
"1 (30).json",
"1 (31).json",
"1 (32).json",
"1 (33).json",
"1 (34).json",
"1 (35).json",
"1 (36).json",
"1 (37).json",
"1 (38).json",
"1 (39).json",
"1 (40).json",
"1 (41).json",
"1 (42).json",
"1 (43).json",
"1 (44).json",
"1 (45).json",
"1 (46).json",
"1 (47).json",
"1 (48).json",
"1 (49).json",
"1 (50).json",
"1 (51).json",
"1 (52).json",
"1 (53).json",
"1 (54).json",
"1 (55).json",
"1 (56).json",
"1 (57).json",
"1 (58).json",
"1 (59).json",
"1 (60).json",
"1 (61).json",
"1 (62).json",
"1 (63).json",
"1 (64).json",
"1 (65).json",
"1 (66).json",
"1 (67).json",
"1 (68).json",
"1 (69).json",
"1 (70).json",
"1 (71).json",
"1 (72).json",
"1 (73).json",
"1 (74).json",
"1 (75).json",
"1 (76).json",
"1 (77).json",
"1 (78).json",
"1 (79).json",
"1 (80).json",
"1 (81).json",
"1 (82).json",
"1 (83).json",
"1 (84).json",
"1 (85).json",
"1 (86).json",
"1 (87).json",
"1 (88).json",
],
"000-10a_執行本部": [
"1.json",
],
"000-10b_役職者": [
"1.json",
],
"000-10c_明大祭出欠確認": [
"1 (1).json",
"1 (2).json",
"1 (3).json",
"1 (4).json",
"1 (5).json	",
"1 (6).json",
"1 (7).json",
],
"000-10d_シフト": [
"1 (1).json",
"1 (2).json",
"1 (3).json",
"1 (4).json",
"1 (5).json	",
"1 (6).json",
"1 (7).json",
"1 (8).json",
"1 (9).json",
"1 (10).json",
"1 (11).json",
"1 (12).json",
"1 (13).json",
"1 (14).json",
"1 (15).json",
"1 (16).json",
"1 (17).json",
"1 (18).json",
"1 (19).json",
"1 (20).json",
"1 (21).json",
"1 (22).json",
"1 (23).json",
"1 (24).json",
"1 (25).json",
"1 (26).json",
"1 (27).json",
"1 (28).json",
"1 (29).json",
"1 (30).json",
"1 (31).json",
"1 (32).json",
"1 (33).json",
"1 (34).json",
"1 (35).json",
"1 (36).json",
"1 (37).json",
"1 (38).json",
"1 (39).json",
"1 (40).json",
"1 (41).json",
"1 (42).json",
"1 (43).json",
"1 (44).json",
"1 (45).json",
"1 (46).json",
"1 (47).json",
"1 (48).json",
"1 (49).json",
"1 (50).json",
"1 (51).json",
"1 (52).json",
"1 (53).json",
"1 (54).json",
"1 (55).json",
"1 (56).json",
"1 (57).json",
"1 (58).json",
"1 (59).json",
"1 (60).json",
"1 (61).json",
"1 (62).json",
"1 (63).json",
"1 (64).json",
"1 (65).json",
"1 (66).json",
"1 (67).json",
"1 (68).json",
"1 (69).json",
"1 (70).json",
"1 (71).json",
"1 (72).json",
"1 (73).json",
"1 (74).json",
"1 (75).json",
"1 (76).json",
"1 (77).json",
"1 (78).json",
"1 (79).json",
"1 (80).json",
"1 (81).json",
"1 (82).json",
"1 (83).json",
"1 (84).json",
"1 (85).json",
"1 (86).json",
"1 (87).json",
"1 (88).json",
],
"000-10e_マニュアル": [
"1 (1).json",
"1 (2).json",
"1 (3).json",
"1 (4).json",
"1 (5).json	",
"1 (6).json",
"1 (7).json",
"1 (8).json",
"1 (9).json",
"1 (10).json",
"1 (11).json",
"1 (12).json",
"1 (13).json",
"1 (14).json",
"1 (15).json",
"1 (16).json",
"1 (17).json",
"1 (18).json",
"1 (19).json",
"1 (20).json",
"1 (21).json",
"1 (22).json",
"1 (23).json",
"1 (24).json",
"1 (25).json",
"1 (26).json",
"1 (27).json",
"1 (28).json",
"1 (29).json",
"1 (30).json",
"1 (31).json",
"1 (32).json",
"1 (33).json",
"1 (34).json",
"1 (35).json",
"1 (36).json",
"1 (37).json",
"1 (38).json",
"1 (39).json",
"1 (40).json",
"1 (41).json",
"1 (42).json",
"1 (43).json",
"1 (44).json",
"1 (45).json",
"1 (46).json",
"1 (47).json",
"1 (48).json",
"1 (49).json",
"1 (50).json",
"1 (51).json",
"1 (52).json",
"1 (53).json",
"1 (54).json",
"1 (55).json",
"1 (56).json",
"1 (57).json",
"1 (58).json",
"1 (59).json",
"1 (60).json",
"1 (61).json",
"1 (62).json",
"1 (63).json",
"1 (64).json",
"1 (65).json",
"1 (66).json",
"1 (67).json",
"1 (68).json",
"1 (69).json",
"1 (70).json",
"1 (71).json",
"1 (72).json",
"1 (73).json",
"1 (74).json",
"1 (75).json",
"1 (76).json",
"1 (77).json",
"1 (78).json",
"1 (79).json",
"1 (80).json",
"1 (81).json",
"1 (82).json",
"1 (83).json",
"1 (84).json",
"1 (85).json",
"1 (86).json",
"1 (87).json",
"1 (88).json",
],
"00c_全体会議": [
"1 (1).json",
"1 (2).json",
"1 (3).json",
"1 (4).json",
"1 (5).json	",
"1 (6).json",
"1 (7).json",
"1 (8).json",
"1 (9).json",
"1 (10).json",
"1 (11).json",
"1 (12).json",
"1 (13).json",
"1 (14).json",
"1 (15).json",
"1 (16).json",
"1 (17).json",
"1 (18).json",
"1 (19).json",
"1 (20).json",
"1 (21).json",
"1 (22).json",
"1 (23).json",
"1 (24).json",
"1 (25).json",
"1 (26).json",
"1 (27).json",
"1 (28).json",
"1 (29).json",
"1 (30).json",
"1 (31).json",
"1 (32).json",
"1 (33).json",
"1 (34).json",
"1 (35).json",
"1 (36).json",
"1 (37).json",
"1 (38).json",
"1 (39).json",
"1 (40).json",
"1 (41).json",
"1 (42).json",
"1 (43).json",
"1 (44).json",
"1 (45).json",
"1 (46).json",
"1 (47).json",
"1 (48).json",
"1 (49).json",
"1 (50).json",
"1 (51).json",
"1 (52).json",
"1 (53).json",
"1 (54).json",
"1 (55).json",
"1 (56).json",
"1 (57).json",
"1 (58).json",
"1 (59).json",
"1 (60).json",
"1 (61).json",
"1 (62).json",
"1 (63).json",
"1 (64).json",
"1 (65).json",
"1 (66).json",
"1 (67).json",
"1 (68).json",
"1 (69).json",
"1 (70).json",
"1 (71).json",
"1 (72).json",
"1 (73).json",
"1 (74).json",
"1 (75).json",
"1 (76).json",
"1 (77).json",
"1 (78).json",
"1 (79).json",
"1 (80).json",
"1 (81).json",
"1 (82).json",
"1 (83).json",
"1 (84).json",
"1 (85).json",
"1 (86).json",
"1 (87).json",
"1 (88).json",
],
"02b_運営局_会議": [
"1 (1).json",
"1 (2).json",
"1 (3).json",
"1 (4).json",
"1 (5).json	",
"1 (6).json",
"1 (7).json",
"1 (8).json",
"1 (9).json",
"1 (10).json",
"1 (11).json",
"1 (12).json",
"1 (13).json",
"1 (14).json",
"1 (15).json",
"1 (16).json",
"1 (17).json",
"1 (18).json",
"1 (19).json",
"1 (20).json",
"1 (21).json",
"1 (22).json",
"1 (23).json",
"1 (24).json",
"1 (25).json",
"1 (26).json",
"1 (27).json",
"1 (28).json",
"1 (29).json",
"1 (30).json",
"1 (31).json",
"1 (32).json",
"1 (33).json",
"1 (34).json",
"1 (35).json",
"1 (36).json",
"1 (37).json",
"1 (38).json",
"1 (39).json",
],
"03b_演出局_会議": [
"1 (1).json",
"1 (2).json",
"1 (3).json",
"1 (4).json",
"1 (5).json	",
"1 (6).json",
"1 (7).json",
"1 (8).json",
"1 (9).json",
"1 (10).json",
"1 (11).json",
"1 (12).json",
"1 (13).json",
"1 (14).json",
"1 (15).json",
"1 (16).json",
"1 (17).json",
"1 (18).json",
"1 (19).json",
"1 (20).json",
"1 (21).json",
"1 (22).json",
"1 (23).json",
"1 (24).json",
"1 (25).json",
"1 (26).json",
"1 (27).json",
"1 (28).json",
"1 (29).json",
"1 (30).json",
"1 (31).json",
"1 (32).json",
"1 (33).json",
"1 (34).json",
"1 (35).json",
"1 (36).json",
"1 (37).json",
"1 (38).json",
"1 (39).json",
"1 (40).json",
"1 (41).json",
"1 (42).json",
"1 (43).json",
"1 (44).json",
"1 (45).json",
"1 (46).json",
"1 (47).json",
"1 (48).json",
"1 (49).json",
"1 (50).json",
"1 (51).json",
"1 (52).json",
"1 (53).json",
"1 (54).json",
"1 (55).json",
],
"04b_開発局_会議": [
"1 (1).json",
"1 (2).json",
"1 (3).json",
"1 (4).json",
"1 (5).json	",
"1 (6).json",
"1 (7).json",
"1 (8).json",
"1 (9).json",
"1 (10).json",
"1 (11).json",
"1 (12).json",
"1 (13).json",
"1 (14).json",
"1 (15).json",
"1 (16).json",
"1 (17).json",
"1 (18).json",
"1 (19).json",
"1 (20).json",
"1 (21).json",
"1 (22).json",
"1 (23).json",
"1 (24).json",
"1 (25).json",
"1 (26).json",
"1 (27).json",
"1 (28).json",
"1 (29).json",
"1 (30).json",
"1 (31).json",
"1 (32).json",
"1 (33).json",
"1 (34).json",
"1 (35).json",
"1 (36).json",
"1 (37).json",
"1 (38).json",
"1 (39).json",
"1 (40).json",
"1 (41).json",
"1 (42).json",
"1 (43).json",
"1 (44).json",
"1 (45).json",
"1 (46).json",
"1 (47).json",
"1 (48).json",
"1 (49).json",
"1 (50).json",
"1 (51).json",
"1 (52).json",
"1 (53).json",
"1 (54).json",
"1 (55).json",
"1 (56).json",
"1 (57).json",
"1 (58).json",
"1 (59).json",
"1 (60).json",
"1 (61).json",
"1 (62).json",
"1 (63).json",
"1 (64).json",
"1 (65).json",
"1 (66).json",
"1 (67).json",
"1 (68).json",
"1 (69).json",
"1 (70).json",
"1 (71).json",
"1 (72).json",
],
"05b_広報局_会議": [
"1 (1).json",
"1 (2).json",
"1 (3).json",
"1 (4).json",
"1 (5).json	",
"1 (6).json",
"1 (7).json",
"1 (8).json",
"1 (9).json",
"1 (10).json",
"1 (11).json",
"1 (12).json",
"1 (13).json",
"1 (14).json",
"1 (15).json",
"1 (16).json",
"1 (17).json",
"1 (18).json",
"1 (19).json",
"1 (20).json",
"1 (21).json",
"1 (22).json",
"1 (23).json",
"1 (24).json",
"1 (25).json",
"1 (26).json",
"1 (27).json",
"1 (28).json",
"1 (29).json",
"1 (30).json",
"1 (31).json",
"1 (32).json",
"1 (33).json",
"1 (34).json",
"1 (35).json",
"1 (36).json",
"1 (37).json",
"1 (38).json",
"1 (39).json",
"1 (40).json",
"1 (41).json",
"1 (42).json",
"1 (43).json",
"1 (44).json",
"1 (45).json",
"1 (46).json",
"1 (47).json",
"1 (48).json",
"1 (49).json",
"1 (50).json",
"1 (51).json",
"1 (52).json",
"1 (53).json",
"1 (54).json",
"1 (55).json",
"1 (56).json",
"1 (57).json",
"1 (58).json",
"1 (59).json",
"1 (60).json",
"1 (61).json",
"1 (62).json",
"1 (63).json",
"1 (64).json",
"1 (65).json",
"1 (66).json",
"1 (67).json",
"1 (68).json",
"1 (69).json",
"1 (70).json",
"1 (71).json",
"1 (72).json",
"1 (73).json",
"1 (74).json",
"1 (75).json",
"1 (76).json",
],
"06b_財務局_会議": [
"1 (1).json",
"1 (2).json",
"1 (3).json",
"1 (4).json",
"1 (5).json	",
"1 (6).json",
"1 (7).json",
"1 (8).json",
"1 (9).json",
"1 (10).json",
"1 (11).json",
"1 (12).json",
"1 (13).json",
"1 (14).json",
"1 (15).json",
"1 (16).json",
"1 (17).json",
"1 (18).json",
"1 (19).json",
"1 (20).json",
"1 (21).json",
"1 (22).json",
"1 (23).json",
"1 (24).json",
"1 (25).json",
"1 (26).json",
"1 (27).json",
"1 (28).json",
"1 (29).json",
"1 (30).json",
"1 (31).json",
"1 (32).json",
"1 (33).json",
"1 (34).json",
"1 (35).json",
"1 (36).json",
"1 (37).json",
"1 (38).json",
"1 (39).json",
"1 (40).json",
"1 (41).json",
"1 (42).json",
"1 (43).json",
"1 (44).json",
"1 (45).json",
"1 (46).json",
"1 (47).json",
"1 (48).json",
"1 (49).json",
"1 (50).json",
"1 (51).json",
"1 (52).json",
"1 (53).json",
"1 (54).json",
"1 (55).json",
"1 (56).json",
"1 (57).json",
"1 (58).json",
"1 (59).json",
"1 (60).json",
"1 (61).json",
"1 (62).json",
"1 (63).json",
"1 (64).json",
"1 (65).json",
"1 (66).json",
"1 (67).json",
"1 (68).json",
"1 (69).json",
"1 (70).json",
"1 (71).json",
"1 (72).json",
"1 (73).json",
"1 (74).json",
"1 (75).json",
"1 (76).json",
"1 (77).json",
"1 (78).json",
"1 (79).json",
"1 (80).json",
"1 (81).json",
"1 (82).json",
"1 (83).json",
"1 (84).json",
"1 (85).json",
"1 (86).json",
"1 (87).json",
"1 (88).json",
],
"07b_参加団体局_会議": [
"1 (1).json",
"1 (2).json",
"1 (3).json",
"1 (4).json",
"1 (5).json	",
"1 (6).json",
"1 (7).json",
"1 (8).json",
"1 (9).json",
"1 (10).json",
"1 (11).json",
"1 (12).json",
"1 (13).json",
"1 (14).json",
"1 (15).json",
"1 (16).json",
"1 (17).json",
"1 (18).json",
"1 (19).json",
"1 (20).json",
"1 (21).json",
"1 (22).json",
"1 (23).json",
"1 (24).json",
"1 (25).json",
"1 (26).json",
"1 (27).json",
"1 (28).json",
"1 (29).json",
"1 (30).json",
"1 (31).json",
"1 (32).json",
"1 (33).json",
"1 (34).json",
"1 (35).json",
"1 (36).json",
"1 (37).json",
"1 (38).json",
"1 (39).json",
"1 (40).json",
"1 (41).json",
"1 (42).json",
"1 (43).json",
"1 (44).json",
"1 (45).json",
"1 (46).json",
"1 (47).json",
"1 (48).json",
"1 (49).json",
"1 (50).json",
"1 (51).json",
"1 (52).json",
"1 (53).json",
"1 (54).json",
"1 (55).json",
"1 (56).json",
"1 (57).json",
"1 (58).json",
"1 (59).json",
"1 (60).json",
"1 (61).json",
"1 (62).json",
"1 (63).json",
"1 (64).json",
"1 (65).json",
"1 (66).json",
"1 (67).json",
"1 (68).json",
"1 (69).json",
"1 (70).json",
"1 (71).json",
"1 (72).json",
"1 (73).json",
"1 (74).json",
"1 (75).json",
"1 (76).json",
"1 (77).json",
"1 (78).json",
"1 (79).json",
"1 (80).json",
"1 (81).json",
"1 (82).json",
"1 (83).json",
"1 (84).json",
"1 (85).json",
"1 (86).json",
"1 (87).json",
"1 (88).json",
],
"08b_渉外局_会議": [
"1 (1).json",
"1 (2).json",
"1 (3).json",
"1 (4).json",
"1 (5).json	",
"1 (6).json",
"1 (7).json",
"1 (8).json",
"1 (9).json",
"1 (10).json",
"1 (11).json",
"1 (12).json",
"1 (13).json",
"1 (14).json",
"1 (15).json",
"1 (16).json",
"1 (17).json",
"1 (18).json",
"1 (19).json",
"1 (20).json",
"1 (21).json",
"1 (22).json",
"1 (23).json",
"1 (24).json",
"1 (25).json",
"1 (26).json",
"1 (27).json",
"1 (28).json",
"1 (29).json",
"1 (30).json",
"1 (31).json",
"1 (32).json",
"1 (33).json",
"1 (34).json",
"1 (35).json",
"1 (36).json",
"1 (37).json",
"1 (38).json",
"1 (39).json",
"1 (40).json",
"1 (41).json",
"1 (42).json",
"1 (43).json",
"1 (44).json",
"1 (45).json",
"1 (46).json",
"1 (47).json",
"1 (48).json",
"1 (49).json",
"1 (50).json",
"1 (51).json",
"1 (52).json",
"1 (53).json",
"1 (54).json",
"1 (55).json",
"1 (56).json",
"1 (57).json",
"1 (58).json",
"1 (59).json",
"1 (60).json",
"1 (61).json",
"1 (62).json",
"1 (63).json",
"1 (64).json",
"1 (65).json",
"1 (66).json",
"1 (67).json",
"1 (68).json",
"1 (69).json",
"1 (70).json",
"1 (71).json",
"1 (72).json",
"1 (73).json",
"1 (74).json",
"1 (75).json",
"1 (76).json",
"1 (77).json",
"1 (78).json",
"1 (79).json",
"1 (80).json",
"1 (81).json",
"1 (82).json",
"1 (83).json",
"1 (84).json",
"1 (85).json",
"1 (86).json",
"1 (87).json",
"1 (88).json",
"1 (89).json",
"1 (90).json",
"1 (91).json",
],
"09b_制作局_会議": [
"1 (1).json",
"1 (2).json",
"1 (3).json",
"1 (4).json",
"1 (5).json	",
"1 (6).json",
"1 (7).json",
"1 (8).json",
"1 (9).json",
"1 (10).json",
"1 (11).json",
"1 (12).json",
"1 (13).json",
"1 (14).json",
"1 (15).json",
"1 (16).json",
"1 (17).json",
"1 (18).json",
"1 (19).json",
"1 (20).json",
"1 (21).json",
"1 (22).json",
"1 (23).json",
"1 (24).json",
"1 (25).json",
"1 (26).json",
"1 (27).json",
"1 (28).json",
"1 (29).json",
"1 (30).json",
"1 (31).json",
"1 (32).json",
"1 (33).json",
"1 (34).json",
"1 (35).json",
"1 (36).json",
"1 (37).json",
"1 (38).json",
"1 (39).json",
"1 (40).json",
"1 (41).json",
"1 (42).json",
"1 (43).json",
"1 (44).json",
"1 (45).json",
"1 (46).json",
"1 (47).json",
"1 (48).json",
"1 (49).json",
"1 (50).json",
"1 (51).json",
"1 (52).json",
"1 (53).json",
"1 (54).json",
"1 (55).json",
"1 (56).json",
"1 (57).json",
"1 (58).json",
"1 (59).json",
"1 (60).json",
"1 (61).json",
"1 (62).json",
"1 (63).json",
"1 (64).json",
"1 (65).json",
"1 (66).json",
"1 (67).json",
"1 (68).json",
"1 (69).json",
"1 (70).json",
"1 (71).json",
"1 (72).json",
"1 (73).json",
"1 (74).json",
"1 (75).json",
"1 (76).json",
"1 (77).json",
"1 (78).json",
"1 (79).json",
"1 (80).json",
"1 (81).json",
"1 (82).json",
"1 (83).json",
"1 (84).json",
"1 (85).json",
"1 (86).json",
"1 (87).json",
"1 (88).json",
],
"10b_総務局_会議": [
"1 (1).json",
"1 (2).json",
"1 (3).json",
"1 (4).json",
"1 (5).json	",
"1 (6).json",
"1 (7).json",
"1 (8).json",
"1 (9).json",
"1 (10).json",
"1 (11).json",
"1 (12).json",
"1 (13).json",
"1 (14).json",
"1 (15).json",
"1 (16).json",
"1 (17).json",
"1 (18).json",
"1 (19).json",
"1 (20).json",
"1 (21).json",
"1 (22).json",
"1 (23).json",
"1 (24).json",
"1 (25).json",
"1 (26).json",
"1 (27).json",
"1 (28).json",
"1 (29).json",
"1 (30).json",
"1 (31).json",
"1 (32).json",
"1 (33).json",
"1 (34).json",
"1 (35).json",
"1 (36).json",
"1 (37).json",
"1 (38).json",
"1 (39).json",
"1 (40).json",
"1 (41).json",
"1 (42).json",
"1 (43).json",
"1 (44).json",
"1 (45).json",
"1 (46).json",
"1 (47).json",
"1 (48).json",
"1 (49).json",
"1 (50).json",
"1 (51).json",
"1 (52).json",
"1 (53).json",
"1 (54).json",
"1 (55).json",
"1 (56).json",
"1 (57).json",
"1 (58).json",
"1 (59).json",
"1 (60).json",
"1 (61).json",
"1 (62).json",
"1 (63).json",
"1 (64).json",
"1 (65).json",
"1 (66).json",
"1 (67).json",
"1 (68).json",
"1 (69).json",
"1 (70).json",
"1 (71).json",
"1 (72).json",
"1 (73).json",
"1 (74).json",
"1 (75).json",
"1 (76).json",
"1 (77).json",
"1 (78).json",
"1 (79).json",
"1 (80).json",
"1 (81).json",
"1 (82).json",
"1 (83).json",
"1 (84).json",
"1 (85).json",
"1 (86).json",
"1 (87).json",
"1 (88).json",
],
};
let currentChannel = null;

function formatTimestamp(ts) {
  const date = new Date(parseFloat(ts) * 1000); // 秒をミリ秒に変換
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return date.toLocaleString("ja-JP", options);
}
const userIdToNameMap = {
  // 執行部
  "U06L97X3V6J":"前冬磨",
  "U06LDT584J1":"我那覇天空",
  "U06LE9EH9QV":"中保翔貴",
  "U06LCUTBMU5":"橋本悠佑",

  // 局長
  "U06LKHN3RE0":"村川樹",
  "U06L2DCDLF9":"河野純大",
  "U06LE249H0V":"塚田滉平",
  "U06LVK2FU1X":"梅本瑛平",
  "U06LKEPTCA0": "佐久間太福人",
  "U06LKTXCZL4":"梶原海希",
  "U06LHACMG91":"結城晃",
  "U06LH4PDAQ3":"齋藤義弘",
  "U06L2CSPXV5":"田中敬達",

  // チーム長
  "U06L4GH3T7H":"鬼沢祥太朗",

  // 部門長
  "U06L294399":"中������",

  // 副局長
  "U06L298526":"高����一",
  
};

// メッセージデータのユーザーIDを名前に変換
function transformUserIdToName(message) {
  // ユーザーIDがマッピングされている場合、名前に変換
  if (message.user && userIdToNameMap[message.user]) {
    message.user_profile = message.user_profile || {};
    message.user_profile.real_name = userIdToNameMap[message.user];
  }
  return message;
}
// メッセージを表示する関数
function displayMessages(channelName, messages) {
  const container = document.getElementById("messages-container");
  container.innerHTML = ''; // 既存メッセージをクリア

  messages.forEach((message) => {
          // ユーザーIDを名前に変換
      message = transformUserIdToName(message);

    // メッセージ全体の要素
    const messageElement = document.createElement('div');
    messageElement.className = "message";

    // プロフィール画像
    const img = document.createElement('img');
    img.src = message.user_profile?.image_72; // プロフィール画像のURL

    // メッセージ内容
    const messageContent = document.createElement('div');
    messageContent.className = "message-content";

    // ヘッダー（名前と送信時刻）
    const header = document.createElement('div');
    header.className = "message-header";

    const nameSpan = document.createElement('span');
    nameSpan.textContent = ` ${message.user_profile?.real_name || "Unknown User"}`;

    const timeSpan = document.createElement('span');
    timeSpan.textContent = `${formatTimestamp(message.ts)}`; // 送信時刻
    timeSpan.style.marginLeft = "10px";
    timeSpan.style.color = "gray";

    header.appendChild(nameSpan);
    header.appendChild(timeSpan);

    // テキスト内容
    const text = document.createElement('div');
    text.className = "message-text";
    text.textContent = message.text; // メッセージ本文

    // 要素を組み立て
    messageContent.appendChild(header);
    messageContent.appendChild(text);
    messageElement.appendChild(img);
    messageElement.appendChild(messageContent);

    // コンテナにメッセージを追加
    container.appendChild(messageElement);
  });
}


// チャンネルデータをロードする関数
async function loadChannelData(channelName) {
  const files = channels[channelName];
  let allMessages = [];

  for (const fileName of files) {
    try {
      const response = await fetch(`log/${channelName}/${fileName}`);
      if (!response.ok) throw new Error(`Failed to load: ${fileName}`);
      const messages = await response.json();
      allMessages = [...allMessages, ...messages];
    } catch (error) {
      console.error(error.message);
    }
  }

  // メッセージをタイムスタンプ順に並べ替える
  allMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  // メッセージを表示
  displayMessages(channelName, allMessages);
}

// タブを作成する関数
function createTabs() {
  Object.keys(channels).forEach((channelName, index) => {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = channelName;

    // 最初のタブをアクティブに
    if (index === 0) {
      tab.classList.add('active');
      loadChannelData(channelName);
    }

    // タブクリックイベント
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((tab) => tab.classList.remove('active'));
      tab.classList.add('active');
      loadChannelData(channelName);
    });

    tabsContainer.appendChild(tab);
  });
}

// 初期化
createTabs();
